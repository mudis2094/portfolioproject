function validate() {

   if( document.contactme.FirstName.value == "" ) {
      alert( "Please provide a first name!" );
      document.contactme.FirstName.focus() ;
      return false;
   }

   if( document.contactme.LastName.value == "" ) {
      alert( "Please provide a last name!" );
      document.contactme.LastName.focus() ;
      return false;

 }

if( document.contactme.EmailAddress.value == "" ){
    alert( "Please provide an email address!" );
    document.contactme.EmailAddress.focus() ;
    return false;
 }

 if( document.contactme.ProjectIdea.value == "" ){
     alert( "Please provide a project idea!" );
     document.contactme.ProjectIdea.focus() ;
     return false;
  }

  return( true );
}
