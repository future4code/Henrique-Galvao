
  export const goToHomePage = (history) => {
    history.push("/");
  };
  
  export const goToTripsPage = (history) => {
    history.push("/tripspage");
  };
  
  export const goToAppFormPage = (history) =>{
      history.push("/appform/:id/:name")
  }

  export const goToAuthenticationPage = (history) =>{
    history.push("/login")
  }

  export const goToAdminPage = (history)=>{
    history.push("/admin")
  }
 
  export const goToTripDetailsPage = (history) =>{
    history.push('/admin/:id/:name')
  }

  export const goToCreateTripPage = (history) =>{
    history.push('/admin/create')
  }

  export const goBackToTrips = (history) =>{
      history.goBack("/tripspage")
  }