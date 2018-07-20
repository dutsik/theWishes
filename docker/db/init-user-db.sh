#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
	CREATE USER next;
	CREATE DATABASE next_development;
	GRANT ALL PRIVILEGES ON DATABASE next_development TO next;
	CREATE DATABASE next_test;
	GRANT ALL PRIVILEGES ON DATABASE next_test TO next;
EOSQL