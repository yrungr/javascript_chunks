      tempData.push({
					model_u_max_children: grAsset.model.u_max_children.getValue(),
					account_u_finance_name: grAsset.account.u_finance_name.getValue(),
					asset_tag: grAsset.asset_tag.getValue(),
					ci_name: grAsset.getValue('ci.name'),
					ci_u_cmdb_ci_status_name: grAsset.ci.u_cmdb_ci_status.name.getValue(),
				  ci_u_product: grAsset.ci.u_product.getDisplayValue(),
					ci_u_provision_date: grAsset.ci.u_provision_date.getValue(),
					model_category_name: grAsset.model_category.name.getValue(),
					model_name: grAsset.model.name.getValue(),
					model_rack_units: grAsset.model.rack_units.getValue(),
					parent: grAsset.parent.getValue(),
					parent_sys_id: grAsset.parent.sys_id.getValue(),
					serial_number: grAsset.serial_number.getValue(),
					support_group_manager_email: grAsset.support_group.manager.email.getValue(),
					support_group_name: grAsset.support_group.name.getValue(),
					support_group_u_slack_channel: grAsset.support_group.u_slack_channel.getValue(),
					sys_class_name: grAsset.sys_class_name.getValue(),
					sys_domain_name: grAsset.sys_domain.name.getValue(),
					sys_id: grAsset.sys_id.getValue(),
					u_rfid_tag: grAsset.u_rfid_tag.getValue(),
					u_rack_u: grAsset.u_rack_u.getValue(),
					u_slot: grAsset.u_slot.getValue(),
					u_rack_sys_id: grAsset.u_rack.sys_id.getValue(),
					u_rack_name: grAsset.u_rack.name.getValue(),
					u_smdb_table: grAsset.u_smdb_table.getValue(),
					u_rack_position: grAsset.u_rack_position.getValue(),
					u_last_audit_date: grAsset.u_last_audit_date.getValue()
      });