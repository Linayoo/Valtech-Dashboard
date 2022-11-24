const DeleteProject = () => {

    let localToken = localStorage.getItem("valtech-auth")

    const deleteMethod = "DELETE"

    const deleteHeaders = new Headers({
        "Authorization": `Bearer ${localToken}`,
        "content-type": "application/json"
    })

    const deleteConfig = {
        method: deleteMethod,
        headers: deleteHeaders,
    }

    const handleDelete = () => {
        fetch(`http://localhost:8000/api/projects/57/`, deleteConfig)
          .then(response => response.json())
          .catch(error => console.log(error))
    }

    return (
        <button type={"delete"} onClick={handleDelete}>Delete</button>
    )
}

export default DeleteProject