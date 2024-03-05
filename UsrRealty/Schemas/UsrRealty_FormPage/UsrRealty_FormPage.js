define("UsrRealty_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "a7333456-c891-474e-89c2-da3d650ce49c",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_iwsjycz",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_iwsjycz"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_py8w722",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_py8w722"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrRealtyType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrRealtyType_zb4lzys",
					"labelPosition": "auto",
					"control": "$PDS_UsrRealtyType_zb4lzys",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrRealtyOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrRealtyOfferType_6qq6ywi",
					"labelPosition": "auto",
					"control": "$PDS_UsrRealtyOfferType_6qq6ywi",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrComment",
				"values": {
					"type": "crt.Input",
					"multiline": true,
					"label": "$Resources.Strings.PDS_UsrComment_stcfw0f",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_stcfw0f"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_RealtyVisits",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_s7imhyk_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "small",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_67cafy4",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_RealtyVisits",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_2mod9j8",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_67cafy4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_RealtyVisits",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_te4jwf3_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_2mod9j8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_pvz34j7",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_pvz34j7_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_twswoz1DS"
						}
					}
				},
				"parentName": "FlexContainer_2mod9j8",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_3naj8qf",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_3naj8qf_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_2mod9j8",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_gbo65rf",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_gbo65rf_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_twswoz1"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_3naj8qf",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_45hwpxg",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_45hwpxg_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_3naj8qf",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_pyogw0u",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_pyogw0u_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_twswoz1"
					]
				},
				"parentName": "FlexContainer_2mod9j8",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_y7p1nd4",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_RealtyVisits",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_RealtyVisits",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_twswoz1",
					"activeRow": "$GridDetail_twswoz1_ActiveRow",
					"selectionState": "$GridDetail_twswoz1_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_twswoz1_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_twswoz1DS_Id",
					"columns": [
						{
							"id": "5355bcf3-e628-0f68-33ae-5598d17b80dd",
							"code": "GridDetail_twswoz1DS_UsrVisitDateTime",
							"path": "UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_twswoz1DS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "359cccb5-94c2-fc21-fb2a-3105e75eceff",
							"code": "GridDetail_twswoz1DS_UsrPotentialCustomer",
							"path": "UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_twswoz1DS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "7e2fa6df-3746-d747-f76e-5586ff8b5d05",
							"code": "GridDetail_twswoz1DS_UsrOwner",
							"path": "UsrOwner",
							"caption": "#ResourceString(GridDetail_twswoz1DS_UsrOwner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "259c46d8-4673-e25f-1bb8-4c4ffc7f4065",
							"code": "GridDetail_twswoz1DS_UsrComment",
							"path": "UsrComment",
							"caption": "#ResourceString(GridDetail_twswoz1DS_UsrComment)#",
							"dataValueType": 30
						}
					],
					"bulkActions": []
				},
				"parentName": "GridContainer_y7p1nd4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_twswoz1_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_twswoz1DS",
							"filters": "$GridDetail_twswoz1 | crt.ToCollectionFilters : 'GridDetail_twswoz1' : $GridDetail_twswoz1_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_twswoz1_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "GridDetail_RealtyVisits",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_twswoz1_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_twswoz1DS",
							"filters": "$GridDetail_twswoz1 | crt.ToCollectionFilters : 'GridDetail_twswoz1' : $GridDetail_twswoz1_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_twswoz1_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_twswoz1_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_twswoz1_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_twswoz1",
							"filters": "$GridDetail_twswoz1 | crt.ToCollectionFilters : 'GridDetail_twswoz1' : $GridDetail_twswoz1_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_twswoz1_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_RealtyVisits",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_twswoz1_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_twswoz1DS",
							"filters": "$GridDetail_twswoz1 | crt.ToCollectionFilters : 'GridDetail_twswoz1' : $GridDetail_twswoz1_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_twswoz1_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_RealtyVisits",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_iwsjycz": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							/* Bind the custom validator to the attribute. */
							"GreaterThanZero": {
								"type": "usr.GreaterThanZero",
								"params": {
									"message": "#ResourceString(GreaterThanZero)#"
								}
							}
						}
					},
					"PDS_UsrArea_py8w722": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							/* Bind the custom validator to the attribute. */
							"GreaterThanZero": {
								"type": "usr.GreaterThanZero",
								"params": {
									"message": "#ResourceString(GreaterThanZero)#"
								}
							}
						}
					},
					"PDS_UsrRealtyType_zb4lzys": {
						"modelConfig": {
							"path": "PDS.UsrRealtyType"
						}
					},
					"PDS_UsrRealtyOfferType_6qq6ywi": {
						"modelConfig": {
							"path": "PDS.UsrRealtyOfferType"
						}
					},
					"PDS_UsrComment_stcfw0f": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"GridDetail_twswoz1": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_twswoz1DS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_twswoz1DS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_twswoz1DS.UsrVisitDateTime"
									}
								},
								"GridDetail_twswoz1DS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_twswoz1DS.UsrPotentialCustomer"
									}
								},
								"GridDetail_twswoz1DS_UsrOwner": {
									"modelConfig": {
										"path": "GridDetail_twswoz1DS.UsrOwner"
									}
								},
								"GridDetail_twswoz1DS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_twswoz1DS.UsrComment"
									}
								},
								"GridDetail_twswoz1DS_Id": {
									"modelConfig": {
										"path": "GridDetail_twswoz1DS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_twswoz1DS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty"
						},
						"scope": "page"
					},
					"GridDetail_twswoz1DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrOwner": {
									"path": "UsrOwner"
								},
								"UsrComment": {
									"path": "UsrComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
					{
						request: "crt.HandleViewModelAttributeChangeRequest",
						/* The custom implementation of the system query handler. */
						handler: async (request, next) => {
							if (request.attributeName === 'PDS_UsrPrice_iwsjycz') {
								const price = await request.$context.PDS_UsrPrice_iwsjycz;
								
								/* get the value from system setting */
								const sysSettingsService = new sdk.SysSettingsService();
								const priceThreshold = await sysSettingsService.getByCode('UsrRealtyCommentRequired');
								const isCommentsMandatory = price > priceThreshold.value ? true : false
								
								this.console.log(price, priceThreshold);
								
								/* Check the request status. */
								if (isCommentsMandatory) {
									/* If the request is new, apply the required validator to the UsrDescription attribute. */
									request.$context.enableAttributeValidator('PDS_UsrComment_stcfw0f', 'required');
								} else {
									/* Do not apply the required validator to the UsrDescription attribute for non-new requests. */
									request.$context.disableAttributeValidator('PDS_UsrComment_stcfw0f', 'required');
								}
							}
							/* Call the next handler if it exists and return its result. */
							return next?.handle(request);
						}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"usr.GreaterThanZero": {
						"validator": function (config) {
							return function (control) {
								return control.value > 0 ? null: {
									"usr.GreaterThanZero": { message: config.message }
								};
							};
						},
						"params": [
							{
								"name": "message"
							}
						],
						"async": false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});