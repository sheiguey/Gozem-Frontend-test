const StateBar =()=>{
   return (
       <div className="state-bar">
           <button className="state-bar_element mood">
               <img className="state-bar_icon" src="/assets/icons/mood-happy.png" alt="mood happy icon" />
               <span></span>
           </button>
           <button className="state-bar_element los">
               <img className="state-bar_icon" src="/assets/icons/a-iconlos.png" alt="Icon losange" />
               <span></span>
           </button>
           <button className="state-bar_element belt"><img className="state-bar_icon" src="/assets/icons/alarm-bell.png" alt="icon alarm" />
                <span>2</span>
           </button>
           <button className="state-bar_element badge-1"><img className="state-bar_icon" src="/assets/icons/badge-1.png" alt="icon bage" />
               <p>300K</p>
               <span></span>
           </button>
           <button className="state-bar_element neutral"><img className="state-bar_icon" src="/assets/icons/user.png" alt="single icon" />
               <span></span>
           </button>
           <button className="state-bar_element menu"><img className="state-bar_icon" src="/assets/icons/menu.png" alt="Menu icons" />
               <span></span>
           </button>
       </div>
   )
}

export default StateBar