let isIgnite = true;

function changeCard(event) {
  const card = event.currentTarget
  const bg = isIgnite 
  ? "ignite" :"explorer"
  card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
  isIgnite = !isIgnite
}
