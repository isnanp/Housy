package main

import (
	"housy/database"
	"housy/pkg/mysql"
	"housy/routes"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
)

func main() {
	errEnv := godotenv.Load()
	if errEnv != nil {
		panic("failed to load environment variable")
	}
	e := echo.New()

	mysql.DatabaseInit()
	database.RunMigrations()

	routes.RouteInit(e.Group("/api/v1"))

	e.Logger.Fatal(e.Start("localhost:5000"))

}
