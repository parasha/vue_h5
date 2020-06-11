function attrInit(attrs, form, form_key) {
  return Object.assign(attrs, { value: form[form_key] })
}

export default attrInit;