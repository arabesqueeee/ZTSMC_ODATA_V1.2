/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
/*eslint-env node, es6 */
"use strict";

var conn = $.db.getConnection();
var pstmt = conn.prepareStatement('select * FROM "ZTSMC_HDB_ODATA_SERVICE_HDI_DB_1"."ZTAB_EC_USER" ');
pstmt.execute();

pstmt.close();

conn.commit();
conn.close();

/*var conn = $.db.getConnection();
var query =
	` select * FROM "ZSCM_SF_EC"."ZTAB_EC_ORG_UNIT" `;
var rs = conn.execute(query);*/

$.response.setBody("success");
$.response.contentType = "application/json";
$.response.status = $.net.http.OK;