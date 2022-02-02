"use strict";

function create_api() {
  var ver = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'new';

  if (ver == 'new') {
    var checkBoxs = document.querySelectorAll('.Polaris-Checkbox__Input_30ock');
    var index = 0;
    checkBoxs.forEach(function (check) {
      if (check.checked != true) {
        check.click();
        setTimeout(function () {
          console.log("Enable checkbox " + index);
        }, 1000);
        index += 1;
      } else {
        return;
      }
    });
  } else {
    document.getElementById('api_client_title').value = 'litextension';
    document.getElementById('api_client_contact_email').value = 'contact@litextension.com';
    var function_list = document.querySelectorAll("[name='api_client[access_scope][]']");

    for (var _index = 0; _index < function_list.length; _index++) {
      var attr_id = function_list[_index].getAttribute('id');

      if (attr_id.indexOf('[') == -1) {
        continue;
      }

      options = function_list[_index].getElementsByTagName('option');

      if (options.length == 0) {
        continue;
      }

      options[options.length - 1].selected = 'selected';
    }
  }
}

create_api();