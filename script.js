function showDetails(cardType) {
    const detailsId = `${cardType}-details`;
    const detailsElement = document.getElementById(detailsId);

    // Toggle the visibility of the card details
    if (detailsElement.style.display === "block") {
        detailsElement.style.display = "none";
    } else {
        detailsElement.style.display = "block";
    }
}
