var apidata = [{
    "LGT":
    {
        Get_ProdDetails: {
            url: "http://52.163.118.116/FinIQService_API/FXCommonFunctionWrapperService.svc/Get_ProdDetails",
            method: "POST",
            header: {
                'Content-Type': 'application/json'
            },
            body: "{\n\t\"Product_Code\": \"Pivot\"\n}",
            description: {
                "product_codes": "FXOPTION FXBARRIER FXAQ FXDQ TEKO TARFSELL PIVOT STRADDLE STRANGLE RSKREV",
                "request": {
                    "Product_Code": "Pivot"
                },
                "response": {
                    "GetProdDetailsResult": [
                        {
                            "Product_Id": "70",
                            "product_code": "Pivot",
                            "Product_Name": "Pivot",
                            "Internal_Product_Class": "Pivot",
                            "Scheme_Name": "PivotTarn",
                            "Template_Id": "40566",
                            "Template_Code": "PivotTarn",
                            "Template_Name": "Pivot"
                        }
                    ]
                }
            }
        },

        Get_FinIQ_BidAsk_Wrapper: {
            url: "http://52.163.118.116/FinIQService_API/FXCommonFunctionWrapperService.svc/Get_FinIQ_BidAsk_Wrapper",
            method: "POST",
            header: {
                'Content-Type': 'application/json'
            },
            body: "{\n\t\"I_StandardPair\": \"XAU - USD\",\n\t\"I_ProductCode\": \"FXAQ\",\n\t\"I_Mode\": \"FXOSEN\"\n}",
            description: {
                "product_codes": "FXOPTION FXBARRIER FXAQ FXDQ TEKO TARFSELL PIVOT STRADDLE STRANGLE RSKREV",
                "request": {
                    "I_StandardPair": "XAU - USD",
                    "I_ProductCode": "FXAQ",
                    "I_Mode": "FXOSEN"
                },
                "response": {
                    "Get_FinIQ_BidAsk_WrapperResult": {
                        "CurrencyPair": "XAU - USD",
                        "BidRate": 1879.89,
                        "AskRate": 1880.29,
                        "MidRate": 1880.09,
                        "DecimalRate": 2,
                        "PointShift": 2,
                        "PipsMultiplier": 100
                    }
                }
            }

        }
    },
    "Client Portal":
    {
        getportfolio: {
            url: "http://52.163.118.116//finiqservice/PortfolioManagementService_Ang_Nsk.svc/GetPortfolios",
            method: "POST",
            header: {
                'Content-Type': 'application/json'
            },
            body: "{\n\t\"CustomerID\":\"32817\"\n}",
            description: {

            }
        },

        application_id: {
            url: "http://52.163.118.116/FinIQService/FundsLoginDefaultSettings.svc/GetAM_ApplicationID",
            method: "GET",
            header: {
                'Content-Type': 'application/json'
            },
            body: null,
            description: {

            }

        },

        security_holding: {
            url: "http://52.163.118.116/finiqservice/CashBalance_Rest.svc/GetCustPortfolioSecurityHoldings ",
            method: "POST",
            header: {
                'Content-Type': 'application/xml'
            },
            // body: (new DOMParser()).parseFromString("<CustPortfolioHoldingsRequest><CustomerId>32882</CustomerId><Portfolio>SSMF-1</Portfolio></CustPortfolioHoldingsRequest>", "text/xml"),
            body: "<CustPortfolioHoldingsRequest>\r\n   <CustomerId>32882</CustomerId>\r\n   <Portfolio>-S-SMF-1</Portfolio>\r\n</CustPortfolioHoldingsRequest>",
            description: {

            }

        },
        
        Register_User: {
            url: "http://52.163.118.116/finiqservice/LoginAPIService.svc/CreateLoginID",
            method: "POST",
            header: {
                'Content-Type': 'application/json'
            },
            // body: (new DOMParser()).parseFromString("<CustPortfolioHoldingsRequest><CustomerId>32882</CustomerId><Portfolio>SSMF-1</Portfolio></CustPortfolioHoldingsRequest>", "text/xml"),
            body: '{\n' +
  '  "finIQUserInfoDTO": {\n' +
  '    "UserID": "TMTestUser5",\n' +
  '    "UserStatus": "B",\n' +
  '    "GroupID": "OnlineBanking",\n' +
  '    "UserPassword": "password1",\n' +
  '    "SelectAccess": false,\n' +
  '    "InsertAccess": false,\n' +
  '    "UpdateAccess": false,\n' +
  '    "DeleteAccess": false,\n' +
  '    "IPAddress": "",\n' +
  '    "UserHostName": "FINIQ644",\n' +
  '    "PrinterAccess": false,\n' +
  '    "UserActive": false,\n' +
  '    "UserPasswordChangeDate": "",\n' +
  '    "UserPasswordExpiryDate": "",\n' +
  '    "UserEntityID": "4",\n' +
  '    "PasswordHistory1": "",\n' +
  '    "PasswordHistory2": "",\n' +
  '    "PasswordHistory3": "",\n' +
  '    "NextPasswordHistoryField": "",\n' +
  '    "ExternalUserID": "",\n' +
  '    "PrimaryEmailAddress": "Primary@mail.com",\n' +
  '    "SecondaryEmailAddress": "secondary@mail.com",\n' +
  '    "PrimaryPhoneNumber": "4567890",\n' +
  '    "SecondaryPhoneNumber": "6775556",\n' +
  '    "LogonHourBitmap": "",\n' +
  '    "UserStatusReason": "",\n' +
  '    "UserDomainName": "",\n' +
  '    "UserRole": "",\n' +
  '    "StoredPassword": "",\n' +
  '    "TableFlag": "N",\n' +
  '    "MarkedForDeletion": "",\n' +
  '    "IsFirstTimeLogin": false,\n' +
  '    "IsLoginDisabled": false,\n' +
  '    "IsPasswordExpired": false,\n' +
  '    "DepartmentName": ""\n' +
  '  },\n' +
  '  "finIQAuditRequest": {\n' +
  '    "ClientIP": "127.0.0.1",\n' +
  '    "ClientMachineName": "FINIQ644",\n' +
  '    "ClientOperatingSystem": "WINDOWS",\n' +
  '    "ApplicationStartupPath": "LSS_REST_API",\n' +
  '    "ApplicationMode": "LSS_REST_API",\n' +
  '    "AuditActionBy": "DBAdm",\n' +
  '    "AuditUserHomeEntityID": "4",\n' +
  '    "AuditUserRole": "",\n' +
  '    "AuditUserSessionStartedAt": "/Date(1590071003389+0530)/"\n' +
  '  }\n' +
  '}'
,
            description: {

            }

        },
        
        Authorize_User: {
            url: "http://52.163.118.116/finiqservice/LoginAPIService.svc/AuthoriseLoginID",
            method: "POST",
            header: {
                'Content-Type': 'application/json'
            },
            body: '{\n' +
  '  "authoriseFinIQUserRequest": {\n' +
  '    "UserID": "TMTestUser5",\n' +
  '    "GroupID": "OnlineBanking",\n' +
  '    "UserHomeEntityID": 4,\n' +
  '    "GroupTableFlag": "E",\n' +
  '    "UserTableFlag": "N",\n' +
  '    "AuthoriseFlag": true\n' +
  '  },\n' +
  '  "finIQAuditRequest": {\n' +
  '    "ClientIP": "127.0.0.1",\n' +
  '    "ClientMachineName": "FINIQ644",\n' +
  '    "ClientOperatingSystem": "Windows 10",\n' +
  '    "ApplicationStartupPath": "LSS_REST_API",\n' +
  '    "ApplicationMode": "LSS_REST_API",\n' +
  '    "AuditActionBy": "DBAut",\n' +
  '    "AuditUserHomeEntityID": 4,\n' +
  '    "AuditUserRole": "",\n' +
  '    "AuditUserSessionStartedAt": "/Date(1590071003389+0530)/"\n' +
  '  }\n' +
  '}'
,
            description: {

            }

        },
        
        Get_FINIQ_LOGIN_INFO: {
            url: "http://52.163.118.116/finiqservice/BSBCDetailsService.svc/Get_FINIQ_LOGIN_INFO",
            method: "POST",
            header: {
                'Content-Type': 'application/json'
            },
            // body: (new DOMParser()).parseFromString("<CustPortfolioHoldingsRequest><CustomerId>32882</CustomerId><Portfolio>SSMF-1</Portfolio></CustPortfolioHoldingsRequest>", "text/xml"),
            body: '{\n  "I_RequestParams": [\n    {\n      "LoginID": "mohan"\n    }\n  ]\n}',
            description: {

            }

        },
        
        Get_BSBCDetails: {
            url: "http://52.163.118.116/finiqservice/BSBCDetailsService.svc/Get_BSBCDetails",
            method: "POST",
            header: {
                'Content-Type': 'application/json'
            },
            body: '{\n  "I_RequestParams": [\n    {\n      "I_BSBNo": "602406"\n    }\n  ]\n}',
            description: {

            }

        },
        
        insertKYCFormDetails: {
            url: "http://52.163.118.116/FinIQService/CustAccDetails_API.svc/insertKYCFormDetails",
            method: "POST",
            header: {
                'Content-Type': 'application/json'
            },
            body: '{\n' +
  '  "FinIQRequestHeader": {\n' +
  '    "EntityCode": "PB",\n' +
  '    "EntityID": "4",\n' +
  '    "LoginID": "AUUser2",\n' +
  '    "MachineIP": "192.168.20.135",\n' +
  '    "RequestAt": "15-Jul-2020 04:22:54 PM",\n' +
  '    "SourceSystem": "FinIQ Test Excel",\n' +
  '    "ExternalRequestID": "440276825710648",\n' +
  '    "CustomerID": 32868,\n' +
  '    "Formname": "Customer Risk Profile Assessment",\n' +
  '    "OldNewFlag": "New"\n' +
  '  },\n' +
  '  "CRRCalculationRequest": [\n' +
  '    {\n' +
  '      "Key": "Q1",\n' +
  '      "Value": "3"\n' +
  '    },\n' +
  '    {\n' +
  '      "Key": "Q2",\n' +
  '      "Value": "4"\n' +
  '    },\n' +
  '    {\n' +
  '      "Key": "Q3",\n' +
  '      "Value": "2"\n' +
  '    },\n' +
  '    {\n' +
  '      "Key": "Q4",\n' +
  '      "Value": "2"\n' +
  '    },\n' +
  '    {\n' +
  '      "Key": "Q5",\n' +
  '      "Value": "2"\n' +
  '    },\n' +
  '    {\n' +
  '      "Key": "Q6",\n' +
  '      "Value": "2"\n' +
  '    },\n' +
  '    {\n' +
  '      "Key": "Q7",\n' +
  '      "Value": "3"\n' +
  '    },\n' +
  '    {\n' +
  '      "Key": "Q8",\n' +
  '      "Value": "3"\n' +
  '    },\n' +
  '    {\n' +
  '      "Key": "Q9",\n' +
  '      "Value": "2"\n' +
  '    },\n' +
  '    {\n' +
  '      "Key": "Q10",\n' +
  '      "Value": "4"\n' +
  '    },\n' +
  '    {\n' +
  '      "Key": "Q11",\n' +
  '      "Value": "2"\n' +
  '    },\n' +
  '    {\n' +
  '      "Key": "Q12",\n' +
  '      "Value": "1"\n' +
  '    },\n' +
  '    {\n' +
  '      "Key": "Q13",\n' +
  '      "Value": "1"\n' +
  '    }\n' +
  '  ]\n' +
  '}'

,
            description: {

            }

        },
        
        
    }
}]

export function addApiInfo(data) {
    apidata = data;
}

export default {
    apis: apidata,
}
