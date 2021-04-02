var connection = require("./config/orm.js");

orm.select("*", "parties");

orm.select("client_name", "clients");

orm.selectWhere("parties", "party_type", "grown-up");

orm.leftJoin("*", "clients", "parties", "id", "client_id");