const  $ = document.querySelector.bind(document)
        const  $$ = document.querySelectorAll.bind(document)
        const tabs = $$('.tab-item')
        const panes = $$('.tab-pane')
        const line = $('.line')
        const tab_active = $('.tab-item.active')
        
        line.style.width = tab_active.offsetWidth + 'px'
        line.style.left = tab_active.offsetLeft + 'px'




        tabs.forEach((tab,index) => {
             tab.onclick = function(){
                $('.tab-item.active').classList.remove('active')
                $('.tab-pane.active').classList.remove('active')
                this.classList.add('active')
                pane = panes[index]
                pane.classList.add('active')
                
                line.style.width = this.offsetWidth + 'px' 
                line.style.left = this.offsetLeft + 'px'
                
             }
            
        });