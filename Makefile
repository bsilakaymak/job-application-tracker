# Makefile

# Docker Compose file for development
DEV_COMPOSE_FILE = docker-compose.dev.yml

# Docker Compose file for production (or any other environment)
PROD_COMPOSE_FILE = docker-compose.yml

# Default target
default: help

help:
	@echo "Usage:"
	@echo "  make dev      - Run Docker Compose with $(DEV_COMPOSE_FILE)"
	@echo "  make prod     - Run Docker Compose with $(PROD_COMPOSE_FILE)"
	@echo "  make down     - Stop containers"
	@echo "  make help     - Show this help message"

dev:
	docker-compose -f $(DEV_COMPOSE_FILE) up

prod:
	docker-compose -f $(PROD_COMPOSE_FILE) up -d

down:
	docker-compose -f $(DEV_COMPOSE_FILE) down
	docker-compose -f $(PROD_COMPOSE_FILE) down

