const AddCoffee = () => {
  const handleAddCoffee = event =>{
    event.preventDefault();

    const form = event.target;

    const name = form.Name.value;
    const quantity = form.Quantity.value;
    const suplier = form.Suplier.value;
    const taste = form.Taste.value;
    const category = form.Category.value;
    const details = form.Details.value;
    const photo = form.Photo.value;

    const newCoffee = {name, quantity, suplier, taste, category, details, photo};

    // send data to the server
    fetch('http://localhost:5000/coffee', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {console.log(data)})
  }
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h1 className="text-3xl font-extrabold text-center">ADD A COFFEE</h1>
      <form onSubmit={handleAddCoffee} action="">
        {/* Form name and quantity row*/}
        <div className="md:flex">
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="Name"
                className="input input-bordered join-item w-full"
                placeholder="Coffee Name"
              />
            </div>
          </div>
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="Quantity"
                className="input input-bordered join-item w-full"
                placeholder="Available Quantity"
              />
            </div>
          </div>
        </div>
        {/* Form suplier and taste row*/}
        <div className="md:flex">
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Suplier</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="Suplier"
                className="input input-bordered join-item w-full"
                placeholder="Suplier Name"
              />
            </div>
          </div>
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="Taste"
                className="input input-bordered join-item w-full"
                placeholder="Taste"
              />
            </div>
          </div>
        </div>
        {/* Form category and details row*/}
        <div className="md:flex">
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="Category"
                className="input input-bordered join-item w-full"
                placeholder="Category"
              />
            </div>
          </div>
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="Details"
                className="input input-bordered join-item w-full"
                placeholder="Details"
              />
            </div>
          </div>
        </div>
        {/* Form photo url row*/}
        <div className="md:flex">
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="Photo"
                className="input input-bordered join-item w-full"
                placeholder="Photo URL"
              />
            </div>
          </div>
        </div>
        <div className="form-control w-full p-10">
          <div className="join">
            <input
              type="submit"
              name="Submit"
              className="btn btn-block btn-primary"
              value="Add Coffee"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
