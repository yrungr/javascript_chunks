
    var rackColor = rackData.map(function(rack) {
      return {
        "color": [1,1,1],
        "name": rack["name"],
        "sys_id": rack["sys_id"],
        "u_x_min": rack["u_x_min"],
        "u_z_min": rack["u_z_min"],
        "u_max_alloc": rack["u_max_alloc"],
        "u_qty_alloc": rack["u_qty_alloc"],
        "u_environment": rack["u_environment"],
        "u_equip_kw_consume_design": rack["u_equip_kw_consume_design"]
      }
    });
