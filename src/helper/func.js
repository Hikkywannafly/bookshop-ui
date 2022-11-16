export const range = (start, end) => {
  let length = end - start + 1;
  /*
      Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start);
};

export const handleChangeSlug = (e, setSlug) => {
  let value = e.target.value;
  value = value.toLowerCase().replace(/ /g, '-');
  const from = "àáäâèéëêễìíïîòóöôùúüûñç·/_,:;";
  const to = "aaaaeeeeeiiiioooouuuunc------";
  for (let i = 0, l = from.length; i < l; i++) {
    value = value.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }
  value = value.replace(/[^a-z0-9 -]/g, '')
  setSlug(value);
}