function renderReview(bakerId) {
  const email = state.loggedInEmail
  document.querySelector('#page').innerHTML = `
    <section class ="add-review mx-auto mt-4" style="width: 340px;">
      <form onSubmit="review(event)" id="render-form">
      <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="rating" value="1">
      <label class="form-check-label" for="inlineRadio1">1</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="rating" value="2">
      <label class="form-check-label">2</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="rating" id="inlineRadio3" value="3">
      <label class="form-check-label">3</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="rating" value="4">
      <label class="form-check-label">4</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="rating" value="5">
      <label class="form-check-label">5</label>
    </div> 
        <div class="form-group">
          <label>Tell us your experience</label>
          <textarea rows="5" cols="33" class="form-control" name="review" required></textarea>
          <input type="hidden" name="bakerId" value="${bakerId}">
          <input type="hidden" name="email" value="${email}">
        </div>
        <button type="submit" class="btn btn-light border-secondary">Review</button>
      </form>
  </section>
  `
}

function review(event) {
  event.preventDefault()
  const form = event.target;
  const data = Object.fromEntries(new FormData(form))
  
  fetch('/api/reviews', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(res => {
        console.log(res)
    })
}

