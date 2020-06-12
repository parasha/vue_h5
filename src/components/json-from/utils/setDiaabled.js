export default function setDisabled(ifDiasbled, form_item_config, form){
  if (ifDiasbled(form)) {
    form_item_config.props.disabled = true;
  } else {
    if (form_item_config.props.disabled) {
      form_item_config.props.disabled = false;
    }
  }
}