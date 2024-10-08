import React, { useState } from 'react';
import axios from 'axios';
import '../../../css/contact.css';
import '../../../css/homepage.css';

const Contact = () => {
    const api = 'http://localhost:8080/api/messages';
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [post, setPost] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleInput = (event) => {
        setPost({...post, [event.target.name]: event.target.value})
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(post);
            // Send a POST request with the form data
            const response = await axios.post(api, post, {withCredentials: true});
            // .then(response => console.log(response));
    
            console.log('Message sent successfully:', response.data);
            setIsModalOpen(true);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setPost({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="container">
        <div className="item">
            <h2>About us</h2>
            <p>
            Welcome to Tech Haven! We're your premier destination for high-quality computers, 
            accessories, and exceptional tech support. Whether you're a gamer, professional, 
            or casual user, we offer a wide range of products to meet your needs. Our team of experts 
            is dedicated to providing personalized service, ensuring you find the perfect computer solution. 
            We pride ourselves on our competitive prices and reliable customer service.           
            </p>
        </div>
            <div className="contact-form-footer">
                <h2>Get in Touch</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" name="firstName" value={post.firstName} onChange={handleInput} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" name="lastName" value={post.lastName} onChange={handleInput} required />
                        </div>
                    </div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={post.email} onChange={handleInput} required />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" value={post.message} onChange={handleInput} required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>

            {isModalOpen && (
                <div className="modal" style={{ display: 'block' }}>
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>Thank you for contacting us! We will get back to you soon.</p>
                        <button onClick={closeModal}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
