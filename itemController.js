
var emptyString = "";
var block = "";
// var img_path="";
var local_data = localStorage.getItem("itemsArray").split(",");
var data = product_list(local_data);

for (let i = 0; i < data.length; i++) {
    block = '<section class="py-5"> <div class="container"><div class="row gx-5"><aside class="col-lg-6"> <div class="mb-3"><a target="_blank" data-type="image"href="#"> <img class="rounded-4 product_img" \
                                src="" /> \
                        </a> \
                    </div> \
                </aside> \
                <main class="col-lg-6"> \
                    <div class="ps-lg-3"> \
                        <h4 class="title text-dark" id="title_changed">'+ data[i]["title"] + '</h4> \
                        <div class="d-flex flex-row my-3"> \
                            <div class="text-warning mb-1 me-2"> \
                                <i class="fa fa-star"></i> \
                                <i class="fa fa-star"></i> \
                                <i class="fa fa-star"></i> \
                                <i class="fa fa-star"></i> \
                                <i class="fas fa-star-half-alt"></i> \
                            </div> \
                        </div> \
                        <div class="mb-3"> \
                            <span class="h5" id="price_changed">'+ data[i]["price"] + '</span> \
                        </div> \
                        <p id="description_changed">'+ data[i]["description"] + '</p> \
                        <hr /> \
                        <a href="#" class="btn btn-warning shadow-0"> Buy now </a> \
                    </div> \
                </main> \
            </div> \
        </div> \
    </section> '
    emptyString += block;
}
document.getElementById("addNewItem").innerHTML = emptyString;

function product_list(dataArray) {
    var count = 1;
    var products = [];
    var item = {};
    for (let i = 0; i < dataArray.length; i++) {

        if (count == 1) {
            item["title"] = dataArray[i];
        }
        if (count == 2) {
            item["description"] = dataArray[i];
          
        }
        if (count == 3) {
            item["price"] = dataArray[i];
            count = 0;
            products.push(item);
            item={};
        }
        count++;
        
    }
    return products;
}