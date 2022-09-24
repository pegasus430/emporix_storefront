import axios from "axios";
import anonymous from './anonymousToken'
import { signup_api } from '../service.config'
import ApiRequest from "..";
import {
    
    SET_MESSAGE,
  } from "../../actions/types";

const API_URL = process.env.REACT_APP_API_URL_STAGE
const tenant = process.env.REACT_APP_TENANT_STAGE

const register = async (email, password , firstName , lastName, tenantName , company , phoneNumber) => {
	let response
	await anonymous.getAnonymousToken(tenantName).then(
		async (data) =>{
			
			let headers = {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + data
			}

			const payload = {
				email : email,
				password: password,
				customerDetails: {
					firstName: firstName,
					lastName: lastName,
					contactPhone : phoneNumber,
					company : company,
					contactEmail : email

				},
				signup : {
					email : email,
					password : password
				}
			}
			response = await ApiRequest(signup_api, 'post', payload, headers)
			
			


			
		},
		(error) => {
			console.log("error from anonymous", error)
			
		}
	);

	return response
};

const  login = async (username, password) => {
	let response_data = null
	await anonymous.getAnonymousToken().then(
		async (data) =>{
				await axios
				.post(API_URL + `/customer/${tenant}/login`, 
					{
						
							"email" : username,
							"password": password
						
					}, 
					{
							headers:
							{
								'Content-Type': 'application/json', 
								'Authorization': 'Bearer ' + data
							}
					}
				)
				.then(async (response) =>  {
					if (response.data.accessToken) {
						localStorage.setItem("customer_accesstoken", JSON.stringify(response.data.accessToken));
						let customer_accesstoken = response.data.accessToken
						
							await axios.get
							(
								API_URL + `/customer/${tenant}/me?expand=addresses`, 
								{
									headers:
									{
										'Content-Type': 'application/json', 
										'Authorization': 'Bearer ' + customer_accesstoken
									}
								}

							) 
							.then((response) => {
								if(response.data.firstName)
								{
									
									response_data = response.data
								}
								})
						
					}
					
				},
				(error) =>{
					console.log("error when login", error)
					
				}
				);

		
		},
		(error) => {
			console.log("error from anonymous", error)
		}
	);
    
	return response_data
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};