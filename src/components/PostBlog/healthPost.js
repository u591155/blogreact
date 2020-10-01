import React from 'react';
import HealthAdditionalR from '../AdditionalReads/HealthReadsComponent';
import SideNavigation from '../SideNavigation';
import ModalTable from '../modalComponents/modalTable'

function HealthPost(){
    return(
    <React.Fragment>
    <SideNavigation />     
        <div class="col-sm col-md col-lg mt-5" id="postSection">
            <h2 class="postTitle text-center mt-mb-5">Health</h2>
            <br/>
            <h3>Stressful And Uncertain Times</h3>
            <hr/>
            <p>It can be said that during modern history since the flu pandemic caused by H1N1 influenza A virus that lasted from February 1918 to April 2020 (which infected one third of the population in four successive waves) we have not seen anything until now. 
            Sure there has been some other diseases, but not one that has put the world to an abrupt shake. </p>
            <p>Population is larger and constant government shutdowns have occur. This is not about the economic impact or political measurements taken, but one piece that keeps being ignored in many media channels is the effect that is having in peoples mental health. 
            We are creatures that socialize, and even though technology allows you to communicate with each other within seconds around the world nothing will compare to close proximity with another human. Not just people that we know through social platforms, but the ones that matter the most our loved ones and friends. </p>    
            <p>Public health actions, such as social distancing, can make people feel isolated and lonely and can increase stress and anxiety. However, these actions are necessary to reduce the spread of COVID-19. Fear and anxiety about a new disease and what could happen can be overwhelming and cause strong emotions in adults and children. 
            Something that can be useful as a stress reliever is taking care of your loved ones, but there should be a balance with also taking care of yourself. It is difficult to identify or even come to terms with the idea that a person is having a mental struggle during these difficult times. </p>    
            <hr/>        
            <ul>
                <li>Fear and worry about your own health and the health of your loved</li>
                <li>ones, your financial situation or job, or loss of support services you rely on.</li>
                <li>Changes in sleep or eating patterns.</li>
                <li>Difficulty sleeping or concentrating.</li>
                <li>Worsening of chronic health problems.</li>
                <li>Worsening of mental health conditions.</li>
                <li>Increased use of tobacco, and/or alcohol and other substances.</li>
            </ul>
            <hr/>
            <p>It is important to find ways to maintain a proper mental balance every day, but it can be difficult when the world in going through a time where sometimes it seems like we are just rolling with the punches. Understand that depressing is a lot more comment than you might imagine, so do not feel like you are the only one. Start small... 
            talk to a close friend or family member about what you are going through and you might find that you might not be the only one.  </p>    
        </div>
        <div className="mt-5">
            <HealthAdditionalR />
            <ModalTable />
        </div>
    </React.Fragment>       
    );
}

export default HealthPost