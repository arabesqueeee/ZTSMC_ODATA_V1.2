var limitnum = 1000;

var map = {

	LMS_ITEM: {
		table: '"ZSCH_ODATA"."ZTAB_LMS_ITEM"',
		sql: 'SELECT distinct cpnt_id as COURSE,\'\' as TRN_IMPUTABLE_FLG,CPNT_TITLE_TW as COURSE_TITLE,\'\' as TRN_EDDF_FLG ,\'\' as TRN_TIME_REQ_FRA, CPNT_DESC_TW as DESCR,NOTACTIVE as COURSE_STATUS,\'\' as TRN_DIF_FRA_FLG ,DEL_MTH_ID as COURSE_TYPE,\'N\' as CRSE_MULTILNG_SW, CPNT_SRC_ID as INTERNAL_EXTERNAL,contact_id as SESSN_ADMINISTRATN,CPNT_TITLE_TW as DESCRSHORT,CREATE_DTE as CREATION_DT ,REV_DTE as REVISION_DT,\'Instructor Led\' as PRIMARY_DEL_METHOD,\'\' as INSTR_CMPS_ACP_SW,\'\' as DURATION_TIME,\'\' as DURATION_CONVERTED,\'\' as COST_UNIT_CD,\'\' as SCHOOL_CODE,\'\' as SCHOOL,\'1\' as MIN_STUDENTS, \'1\' as MAX_STUDENTS,\'TWD\' as CURRENCY_CD,\'1.0\' as EDUCATION_UNITS,\'N\' as NON_CATALOGUED,\'Q\' as COURSE_OFFERING,CPNT_TYP_ID as TW_CATEGORY,\'\' as TW_SUB_CAT_CD, \'C\' as TW_COURSE_LANGUAGE,\'\' as TW_CRSE_ELIGBILITY, \'\'as TW_CRSE_TITLE_CHIN,\'\' as TW_OJT,\'N\' as TW_REFRESHER, \'\' as TW_REIMBURSABLE,\'\' as TW_REIMBURSE_AMT, \'\' as TW_REIMBURSE_PCENT,\'\' as TW_REIMBURSE_TYPE,\'\' as TW_COURSE_MATE_URL,\'\' as TW_PRETEST_URL,\'\' as TW_AFTER_SESSN_URL,\'0\' as TW_VALIDITY_DURATN,\'\' as OPRID,\'\' as DEPTID,\'Y\' as TW_ELEARNING,\'\' as TGA_ELIGIBLE,\'\' as TGA_ENTERABLE,\'\' as TW_CRSE_FORUM,\'N\' as TW_CRSE_MATURL_FLG,\'0\' as TW_COST_PER_STUD,\'\' as DESCRLONG,CPNT_LEN as TW_DURATION_TIME, SUB_RECORD_LRNGEVT  as TW_WAIVE_IND,\'\' as TW_GRADE_IND,exam_pass as TW_PASS_GRADE,LST_UPD_USR as LASTUPDOPRID,LST_UPD_TSTMP as LASTUPDDTTM,\'\' as TW_OUTSOURCING,\'\' as TW_MANUAL_CHECK,\'\' as TW_CERTIFICATION,\'\' as TW_CERT_TYPE,exam_pass as TW_ELRN_PASS_GRADE,\'\' as TW_OBJECTIVE,\'\' as TW_OUTLINE,\'\' as TW_RETRAIN_IN,\'\' as TW_CRSE_WAIVE_RSN from "ZSCH_ODATA"."ZTAB_LMS_ITEM"',
		where: 'WHERE TO_VARCHAR(TO_SECONDDATE("TAB_LASTMODIFIED_TIME", \'YYYY-MM-DD HH24:MI:SS\'),\'YYYY-MM-DD HH24:MI:SS\') >= ',
		orderby: 'order by cpnt_id desc'
	},

	EMP_IDP: {
		table: '"ZSCH_ODATA"."ZTAB_LMS_EMP_IDP"',
		sql: 'SELECT distinct STUD_ID as EMPLID,ASSGN_DTE as EFFDT,\'\' as TRN_PROGRAM,REQ_DTE as EST_COMPLETION_DT,\'1\' as COURSE_SEQUENCE,CPNT_ID as COURSE,CPNT_TITLE as COURSE_TITLE,CASE WHEN CPNT_SRC_ID != \'\'THEN (SELECT DISTINCT PS_EXTERNAL_CODE FROM "ZSCH_ODATA"."ZTAB_BASIC_PICKLISTV2" WHERE PICKLISTV2_ID = \'INTERNAL_EXTERNAL\' AND EXTERNAL_CODE = CPNT_SRC_ID) END AS INTERNAL_EXTERNAL, \'Job Requirment\' as TRAINING_REASON,\'Y\' as REQUIRED_CRSE,\'\' as SCHOOL_CODE,\'\' as SCHOOL,ASSGN_DTE as NEED_IDENTIFIED_DT,COMPL_DTE as ACT_COMPLETION_DT,\'\' as GVT_SELF_DEVELOP,\'0\' as GVT_ESTIMATED_COST,\'0\' as GVT_ACTUAL_COST,\'\' as GVT_ACT_STATUS,ADD_USERNAME as OPRID,LST_UPD_TSTMP as TW_LAST_UPD_DT,\'Y\' as TW_CMPLSY_IND FROM "ZSCH_ODATA"."ZTAB_LMS_EMP_IDP" ',
		where: 'WHERE TO_VARCHAR(TO_SECONDDATE("TAB_LASTMODIFIED_TIME", \'YYYY-MM-DD HH24:MI:SS\'),\'YYYY-MM-DD HH24:MI:SS\') >= ',
		orderby: 'ORDER BY STUD_ID DESC'
	},

	CLASS_TYPE: {
		table: '"ZSCH_ODATA"."ZTAB_LMS_SCH_OFFERING"',
		sql: 'select distinct ACT_CPNT_ID as COURSE,SCHD_ID as SESSION_NBR,NOTACTIVE  as SESSION_STATUS,\'\' as COURSE_START_DT,\'\' as COURSE_END_DT,\'\' as RESCHEDULED,\'\' as DURATION_TIME,\'0\' as DURATION_CONVERTED,\'H\' as DURATION_UNIT_CD,\'\' as SESSN_START_TIME,\'\' as SESSN_END_TIME,\'\' as SESSION_LANGUAGE,MIN_ENRL  as MIN_STUDENTS,MAX_ENRL  as MAX_STUDENTS,\'N\' as SESSN_ORGANIZER,DMN_ID as DEPTID,contact_Id as TW_SESSN_OWNER,CLOSED_DATE as TW_ENROL_CLOSE_DT,WITHDRAW_CUTOFF_DTE  as TW_ENROL_CANCEL_DT,\'0\' as TW_TRN_NOTIFY_DAYS,\'0\' as TW_EST_SESSN_CST,\'\' as TW_RESCHED_REASON,\'\' as TW_LOCATION_REASON,\'N\' as TW_TRN_LOC_CHG,\'\' as TW_BUDGET_OWNER,\'\' as TRN_PROGRAM,\'0\' as TW_CRSE_CONT_EVAL,\'0\' as TW_SERV_DELIV_EVAL,SELF_ENRL as TW_SELF_SERVICE,CANCELLED as TW_CANCEL_REASON,\'\' as TW_URL,\'\' as TW_BUDGET_CHECK,\'\' as TW_SESSN_CREATN_DT,\'\' as TW_SITE_CODE,\'\' as TW_SESSN_REMARK,\'\' as TW_COST_PER_STUD,\'\' as TW_PREREQCRSE_FLAG,\'\' as TW_TRN_JG_FLAG,\'\' as TW_EMAILSESSW_FLAG,ROI as TW_ROI_EVAL from "ZSCH_ODATA"."ZTAB_LMS_SCH_OFFERING"',
		where: 'WHERE TO_VARCHAR(TO_SECONDDATE("TAB_LASTMODIFIED_TIME", \'YYYY-MM-DD HH24:MI:SS\'),\'YYYY-MM-DD HH24:MI:SS\') >=',
		orderby: 'order by ACT_CPNT_ID,SCHD_ID desc'
	},

	CLASS_LOCATION: {
		table: '"ZSCH_ODATA"."ZTAB_LMS_SCH_OFFERING"',
		sql: 'select distinct \'\' as COUNTRY_CODE,\'\' as COUNTRY,\'\' as FINANCED_COST_FRA,schd_id as COURSE,\'\' as ADDRESS1,\'\' as PHONE,\'\' as FINANCING_DEPT_FRA,SSG_SEG_NUM as SESSION_NBR,\'\' as CUT_SESSION_NBR,\'\' as ADDRESS2,\'\' as FINANCING_FUND_FRA,TIME_SLOT_START_DATE_TIME  as SESSN_START_DT,\'\' as ADDRESS3,TIME_SLOT_END_DATE_TIME  as ESSN_END_DT ,\'\'  as ADDRESS4,CLASS_HRS as DURATION_TIME,\'\'  as CITY,\'\'  as NUM1,\'\'  as DURATION_CONVERTED,\'H\'  as DURATION_UNIT_CD,\'\'  as NUM2,\'\'  as HOUSE_TYPE,TIME_SLOT_START_DATE_TIME as SESSN_START_TIME,TIME_SLOT_END_DATE_TIME  as SESSN_END_TIME,\'\' as ADDR_FIELD1,LOCATION as FACILITY,\'\' as ADDR_FIELD2,\'\' as VENDOR,\'\' as ADDR_FIELD3,\'\' as FACILITY_NAME,\'\' as COUNTY,\'\' as STATE,LOCATION as ROOM_CD,\'\' as POSTAL,\'\' as CONTACT_NAME,\'\' as GEO_CODE,\'\' as IN_CITY_LIMIT,\'0\' as PER_UNIT_COST,\'\' as COST_UNIT_CD,\'\' as BUSINESS_UNIT,\'\' as DEPTID from "ZSCH_ODATA"."ZTAB_LMS_SCH_OFFERING"',
		where: 'WHERE TO_VARCHAR(TO_SECONDDATE("TAB_LASTMODIFIED_TIME", \'YYYY-MM-DD HH24:MI:SS\'),\'YYYY-MM-DD HH24:MI:SS\') >=',
		orderby: 'order by  SCHD_ID '
	},

	TRAINING_HIS: {
		table: '"ZSCH_ODATA"."ZTAB_LMS_EMP_TRAIN"',
		sql: 'select distinct STUD_ID as EMPLID,\'\' as TRAINING_LEAVE_FRA,\'\' as GVT_TREQ_DATA_REQ,COMPL_DTE as COURSE_START_DT,\'\' as GVT_TRNG_REQNUM,\'\' as TRN_PLN_CATEGORY,CPNT_ID  as COURSE,\'\' as PART_TIME_CRSE_FRA,\'0\' as GVT_TREQ_REQ_SEQ,null as GVT_TRNG_REQ_DATE,\'H\' as COST_UNIT_CD,CPNT_ID as SESSION_NBR,CPNT_TITLE_TW as COURSE_TITLE,\'0.0\' as TIME_SPENT_FRA,\'\' as GVT_TRNG_OBJS,\'0.0\' as DURATION_CONVERTED,COMPL_DTE as COURSE_END_DT,\'\' as GVT_TRN_LOC_IND,\'Y\' as CHARGEABLE_SW_FRA,CPNT_SRC_ID as INTERNAL_EXTERNAL,\'0\' as GVT_DUTY_HRS,\'\' as SCHOOL_CODE,\'N\' as TRN_IMPUTABLE_FLG,\'0\' as GVT_NONDUTYHRS,\'\' as GVT_TC_PURPOS,\'N\' as TRN_DIF_FRA_FLG,\'\' as SCHOOL,\'0\' as TRN_HOURS_FRA,null as DT_NEEDED,\'\' as GVT_TC_TYPE,\'N\' as TRN_PROF_FLG_FRA,\'\' as ATTENDANCE,\'\' as GVT_TC_SOURCE,\'N\' as TRN_OUTWRK_FLG_FRA,\'\' as STATUS_DT,\'\' as GVT_TC_SPECIALINT,\'\' as GVT_PURCHASEORDER,\'0\' as TRN_EE_DURATION_SW,null as WAIT_DT,\'\' as TRAINING_REASON,\'\' as GVT_STATION_SYMBOL,GRADE as COURSE_GRADE,\'\' as GVT_BILLING_INSTR,\'\' as LETTER_CD,\'0\' as GVT_NONGOVTTRNDAYS,null as LETTER_PRINTED_DT,\'\' as GVT_DC_APPRFUND,\'\' as PREREQ_MET,\'\' as GVT_IC_APPRFUND,\'TSMC1\' as BUSINESS_UNIT,\'\' as DEPTID,\'\' as VENDOR,\'\' as DEMAND_ID,\'\' as DESCR,\'\' as GB_GROUP_ID,\'\' as ATTENDANCE_BK,\'\' as LETTER_CD_BK,null as LETTER_PRINT_DT_BK,GRADE as TW_TRN_GRADE_PTS,\'\' as TW_TRN_BATCH_APPRV,\'SF\' as OPRID,\'1\' as RANK,\'N\' as TW_REIMBURSED,\'Y\' as TW_ELEARNING,LST_UPD_TSTMP as TW_TRANS_TIME,\'0\' as EMPL_RCD from "ZSCH_ODATA"."ZTAB_LMS_EMP_TRAIN" ',
		where: 'WHERE TO_VARCHAR(TO_SECONDDATE("TAB_LASTMODIFIED_TIME", \'YYYY-MM-DD HH24:MI:SS\'),\'YYYY-MM-DD HH24:MI:SS\') >=',
		orderby: 'order by STUD_ID,CPNT_ID,COMPL_DTE '
	},

	LMS_INSTRUCTOR: {
		table: '"ZSCH_ODATA"."ZTAB_LMS_INSTRUCTOR"',
		sql: 'select distinct \'\' as INSTRUCTOR_RFC_MEX,inst_id as INSTRUCTOR_ID,\'N\' as TRN_FULL_TIME_INST,stud_id as OPRID,\'0\' as EMPL_RCD,concat(LNAME,FNAME) as NAME,co_Id as VENDOR,null as INTERNAL_EXTERNAL,\'\' as EFFDT,\'A\' as EFF_STATUS,\'\' as SCHOOL_CODE,\'\' as SCHOOL,AMOUNT as TW_HOURLY_RT,\'0\' as TW_SESSN_AMT,\'\' as CURRENCY_CD,EMAIL_ADDR as TW_EMAIL_ADD,SPECIALTY as AREA_OF_EXPERTISE,\'\' as COST_UNIT_CD,\'0\' as PER_UNIT_COST,COMMENTS  as DESCRLONG from "ZSCH_ODATA"."ZTAB_LMS_INSTRUCTOR"',
		where: 'WHERE TO_VARCHAR(TO_SECONDDATE("TAB_LASTMODIFIED_TIME", \'YYYY-MM-DD HH24:MI:SS\'),\'YYYY-MM-DD HH24:MI:SS\') >=',
		orderby: 'order by inst_id desc'
	},

	CLASS_INSTRUCTOR: {
		table: '"ZSCH_ODATA"."ZTAB_LMS_SCH_OFFERING"',
		sql: 'select distinct ACT_CPNT_ID as COURSE,SCHD_ID as SESSION_NBR,SSG_SEG_NUM, SSG_SEG_NUM  as TW_SEQ_NO,INST_ID as INSTRUCTOR_ID,inst_grade as TW_TRN_INSTR_GRADE,\'\' as TW_EXPENSE_CODE,\'\' as TW_SITE_CODE,\'\' as ACCOUNT,\'\' as TW_INSTR_PAY_TYPE,\'N\' as TW_REIMBURSABLE,\'N\' as TW_REIMBURSED,\'0\' as TW_AMT_INCL_TAX,\'0\' as TW_TOTAL_AMT,\'0\' as TW_TAX_AMT from "ZSCH_ODATA"."ZTAB_LMS_SCH_OFFERING" ',
		where: 'WHERE TO_VARCHAR(TO_SECONDDATE("TAB_LASTMODIFIED_TIME", \'YYYY-MM-DD HH24:MI:SS\'),\'YYYY-MM-DD HH24:MI:SS\') >=',
		orderby: 'order by ACT_CPNT_ID, SCHD_ID,SSG_SEG_NUM'
	},

	CLASS_UNIT: {
		table: '"ZSCH_ODATA"."ZTAB_LMS_SCH_OFFERING"',
		sql: 'select distinct SCHD_ID as COURSE,SSG_SEG_NUM as SESSION_NBR,\'1\' as TW_SEQ_NO,SEG_DESC  as TW_SESSN_UNIT_ID,LOCATION as FACILITY,TIME_SLOT_START_DATE_TIME as TW_UNIT_START_DT,TIME_SLOT_END_DATE_TIME  as TW_UNIT_END_DT,TIME_SLOT_START_DATE_TIME as TW_UNIT_START_TIME,TIME_SLOT_END_DATE_TIME as TW_UNIT_END_TIME,CLASS_HRS as TW_SESSN_TOTAL_HRS,LOCATION as TW_FACILITY_ROOM from "ZSCH_ODATA"."ZTAB_LMS_SCH_OFFERING"',
		where: 'WHERE TO_VARCHAR(TO_SECONDDATE("TAB_LASTMODIFIED_TIME", \'YYYY-MM-DD HH24:MI:SS\'),\'YYYY-MM-DD HH24:MI:SS\') >=',
		orderby: 'order by SCHD_ID,SSG_SEG_NUM'
	},

	REPLACE_COURSE: {
		table: '"ZSCH_ODATA"."ZTAB_LMS_EMP_TRAIN"',
		sql: 'select distinct STUD_ID as EMPLID,CPNT_ID as COURSE,CMPL_STAT_ID as TW_WAIVE_REASON,\'W\' as STATUS,COMPL_DTE  as STATUS_DT,SCHD_ID as OPRID,\'\' as TW_TRANS_DT from "ZSCH_ODATA"."ZTAB_LMS_EMP_TRAIN"',
		where: 'WHERE TO_VARCHAR(TO_SECONDDATE("TAB_LASTMODIFIED_TIME", \'YYYY-MM-DD HH24:MI:SS\'),\'YYYY-MM-DD HH24:MI:SS\') >=',
		orderby: ''
	},
	EMP_TRAIN: {
		table: '"ZSCH_ODATA"."ZTAB_LMS_EMP_TRAIN"',
		sql: 'select distinct STUD_ID as EMPLID,CPNT_ID as COURSE,SCHD_ID as SESSION_NBR,\'\' as TW_DATE_QUALIFIED,COMPL_DTE as TW_CERT_CMPL_DT,\'\' as TW_CERT_EXPIRY_DT,LST_UPD_TSTMP as TW_LAST_UPD_DT,\'\' as OPRID from "ZSCH_ODATA"."ZTAB_LMS_EMP_TRAIN"',
		where: 'WHERE TO_VARCHAR(TO_SECONDDATE("TAB_LASTMODIFIED_TIME", \'YYYY-MM-DD HH24:MI:SS\'),\'YYYY-MM-DD HH24:MI:SS\') >=',
		orderby: ''
	}

};