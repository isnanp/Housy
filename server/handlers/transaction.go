package handlers

import (
	dto "housy/dto/result"
	transactiondto "housy/dto/transaction"
	"housy/models"
	"housy/repositories"
	"net/http"
	"strconv"
	"time"

	"github.com/go-playground/validator/v10"
	"github.com/golang-jwt/jwt"
	"github.com/labstack/echo/v4"
)

type transactionsHandlers struct {
	TransactionRepository repositories.TransactionRepository
}

func HandlersTransactions(TransactionRepository repositories.TransactionRepository) *transactionsHandlers {
	return &transactionsHandlers{TransactionRepository: TransactionRepository}
}

func (h *transactionsHandlers) CreateTransaction(c echo.Context) error {
	request := new(transactiondto.TransactionRequest)
	if err := c.Bind(request); err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: "Failed", Message: err.Error()})
	}

	userLogin := c.Get("userLogin")
	userId := userLogin.(jwt.MapClaims)["id"].(float64)
	PropertyID, _ := strconv.Atoi(c.FormValue("property_id"))
	Duration, _ := strconv.Atoi(c.FormValue("duration"))
	Price, _ := strconv.Atoi(c.FormValue("price"))

	request.TenantID = int(userId)
	request.PropertyID = PropertyID
	request.Duration = Duration
	request.Price = Price
	request.CheckIn = c.FormValue("checkIn")
	request.CheckOut = c.FormValue("checkOut")

	validation := validator.New()

	validationErr := validation.Struct(request)
	if validationErr != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: "Failed", Message: validationErr.Error()})
	}

	var transactionIsMatch = false
	var transactionId int
	for !transactionIsMatch {
		transactionId = int(time.Now().Unix())
		transactionData, _ := h.TransactionRepository.GetTransaction(transactionId)
		if transactionData.ID == 0 {
			transactionIsMatch = true
		}
	}

	data := models.Transaction{
		ID:         transactionId,
		PropertyID: request.PropertyID,
		TenantID:   request.TenantID,
		CheckIn:    request.CheckIn,
		CheckOut:   request.CheckOut,
		Duration:   request.Duration,
		Price:      request.Price,
	}

	data, err := h.TransactionRepository.CreateTransaction(data)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Status: "Failed", Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Status: "Success",
		Data:   data,
	})
}

func (h *transactionsHandlers) FindTransaction(c echo.Context) error {
	transaction, err := h.TransactionRepository.FindTransaction()

	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: "Failed", Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Status: "Success", Data: transaction})
}

func (h *transactionsHandlers) GetTransaction(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	transaction, err := h.TransactionRepository.GetTransaction(id)

	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: "Failed", Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Status: "Success", Data: transaction})
}

func (h *transactionsHandlers) GetTransactionByTenant(c echo.Context) error {
	userLogin := c.Get("userLogin")
	userId := int(userLogin.(jwt.MapClaims)["id"].(float64))

	transactions, err := h.TransactionRepository.GetTransactionByTenant(userId)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: "Failed", Message: err.Error()})
	}
	return c.JSON(http.StatusOK, dto.SuccessResult{Status: "success", Data: transactions})
}

func (h *transactionsHandlers) GetTransactionByOwner(c echo.Context) error {
	userLogin := c.Get("userLogin")
	userId := int(userLogin.(jwt.MapClaims)["id"].(float64))

	transactions, err := h.TransactionRepository.GetTransactionByOwner(userId)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: "Failed", Message: err.Error()})
	}
	return c.JSON(http.StatusOK, dto.SuccessResult{Status: "success", Data: transactions})
}
