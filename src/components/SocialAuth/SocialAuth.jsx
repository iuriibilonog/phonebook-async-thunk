import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import FacebookIcon from '@mui/icons-material/Facebook';
import s from './SocialAuth.module.css';

export const GoogleAuth = ({onSubmit}) => {
  
const responseGoogle = (response) => {
  const { hf, pv, GW } = response.Au;
  onSubmit(hf, pv, GW)
  }

  return (
<GoogleLogin
    clientId="106538422300-g9ungu7lgq9k6320pq7aasn21i0027tk.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  )

}

export const FacebookAuth = ({onSubmit}) => {
  
const responseFacebook = (response) => {
  const { name, email, id } = response;
  console.log(name);
  console.log(email);
  console.log(id);
  onSubmit( name, email, id )
}

  return (
 <FacebookLogin
    appId="1085906475561984"
    autoLoad={true}
      fields="name,email,picture"
      textButton='Login'
      icon={<FacebookIcon className={s.fbIcon}/>}
      cssClass={s.fb}
    // onClick={componentClicked}
    callback={responseFacebook} /> 
  )

}



// export const TwitterAuth = ({onSubmit}) => {
  
//   const responseTwitter = (err, data) => {
//     console.log(err, data);
//   };

//   return (

//    <TwitterLogin
//       authCallback={responseTwitter}
//       consumerKey='pOOmWRn43VrauN1UTOaRzOL7E'
//       consumerSecret='6eHqBu5lSWYbBEs4pmx4Nn2ni1nE3b5d9yVtIpDaTapE5O6odR'
//     />
//   )

// }
  

