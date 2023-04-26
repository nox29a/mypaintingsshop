import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://public.herotofu.com/v1/c9f899b0-e451-11ed-9b25-13156513d0a3', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then((response) => {
        // handle success or error response
      })
      .catch((error) => {
        // handle error
      });
  };


  return (
    <div className='container mx-auto my-10'>

        <form onSubmit={handleSubmit}>
          <div className='flex justify-center'>
          <div>

          <div className='h-1/3 text-center text-2xl mx-10'>
            <div className=''>
              Twoje imię: <br/><br/>
              <input className='rounded-xl text-center text-xl h-[60px] text-black' type="text" placeholder="Podaj imię" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
          <div className='h-1/3 text-center text-2xl'>
            <div>
              Email: <br/><br/>
              <input className='rounded-xl text-center text-xl h-[60px] text-black' type="email" placeholder="Podaj maila" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          </div>
          <div className='text-center text-2xl mx-10'>
            <div>
              Twoja wiadomość: <br/><br/>
              <textarea  className='rounded-xl text-center text-xl h-[400px] w-[400px] text-black' value={message} placeholder="Napisz wiadomość" onChange={(e) => setMessage(e.target.value)} />
            </div>
          </div>
      </div>
      
          <div className='text-center border bg-gray-600 p-4 rounded-3xl text-2xl mt-20'>
            <button name="_gotcha" type="submit">Wyślij</button>
          </div>
        </form>
    </div>
  );
};

export default Contact;
