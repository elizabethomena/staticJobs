const box = document.querySelector('.caixa')

window.addEventListener('DOMContentLoaded', ()=>{
    showBoxes()
})

function showBoxes(){
    fetch("data.json")
    .then((data)=>{
        return data.json()
    })
    .then((item)=>{
        //console.log(item.map())
        let displaySummary = item.map((item)=>{
            return `
            <div class="box-info">
              <img src=${item.logo}>
                <section class="caixa-box">
                    <div class="item-info">
                        <div class="item-name">
                        <p class="app">${item.company}</p>
                        <p class="new ">New!</p>
                        <p class="featured">Featured</p>
                        </div>
            
                        <div class="item-vaga">
                        <p>${item.position}</p>
                        </div>
            
                        <div class="item-data">
                        <p>${item.postedAt}</p>
                        <p>${item.contract}</p>
                        <p>${item.location}</p>
                        </div>
                    </div>
        
                    <div class="tags">
                        <button type="menu">${item.role}</button>
                        <button type="menu">${item.level}</button>
                        <button type="menu">${item.languages}</button>
                        <button type="menu">${item.languages}</button>
                        <button type="menu">${item.languages}</button>
                    </div>
                </section>
            </div>
   `
        })
    
        displaySummary = displaySummary.join("")
        console.log(displaySummary)
        box.innerHTML = displaySummary
    })
    .catch((error) => console.log('Error: '+error))
    
    }