const categories = document.querySelector("#categories");
const items = document.querySelectorAll(".item")

// 1
function quantity(items) {
    const itemsQuantity =  items.length;
    console.log(`Number of categories: ${itemsQuantity}`)
}

quantity(items);

// 2

function itemTitleliCount(items) {

    items.forEach(item => {
        const title = item.querySelector("h2").textContent;
        const liItems = item.querySelectorAll("li");
        console.log(`Category: ${title}`);
        console.log(`Elements: ${liItems.length}`);
    });
    

}

itemTitleliCount(items)





