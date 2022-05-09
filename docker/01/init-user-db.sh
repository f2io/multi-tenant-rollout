#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE USER pgdb_01;
	CREATE DATABASE pgdb_01;
	GRANT ALL PRIVILEGES ON DATABASE pgdb_01 TO pgdb_01;
EOSQL