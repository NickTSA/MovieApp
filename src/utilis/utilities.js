export function titleLimit(title, chars) {
  if (title.length > chars + 3) {
    let newTitle = title.slice(0, chars);
    return newTitle + "...";
  } else {
    return title;
  }
}
