function ComicForm({setComics}) {
  function handleSubmit(event){
    event.preventDefault()

    const newComic = {
      "title": event.target.title.value,
      "issue": event.target.issue.value,
      "image_url": event.target.image_url.value,
      "description":""
    }

    fetch("http://localhost:8004/comics", {
    'method':'POST',
    'headers': {
        'Content-Type': 'application/json'
    },
    'body': JSON.stringify(newComic),
    })
    .then(res => res.json())
    .then(data => {
        setComics(prevComics => [data,...prevComics])
    })
  }
  return (

    <form onSubmit={handleSubmit} className="comic-form">

      <h2>Add A New Issue</h2>

      <label htmlFor="image_url">Image URL: </label>
      <input name="image_url" />

      <label htmlFor="title">Title: </label>
      <input name="title" />

      <label htmlFor="issue">Issue Number: </label>
      <input name="issue" type="number" />

      <label htmlFor="description">Description: </label>
      <input name="description" />

      <input type="submit" value="Add Issue" />

    </form>

  )
}

export default ComicForm
