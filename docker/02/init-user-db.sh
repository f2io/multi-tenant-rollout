#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE USER pgdb_02;
	CREATE DATABASE pgdb_02;
	GRANT ALL PRIVILEGES ON DATABASE pgdb_02 TO pgdb_02;
EOSQL