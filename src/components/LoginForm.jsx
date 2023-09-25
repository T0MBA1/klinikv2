import React, { Fragment, useState } from 'react';
// import { Image } from './ui/Media';
import { Btn } from './ui/Button';
import { H4 } from './ui/Headings/H4Element';
import { P } from './ui/Paragraph';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import Image from './ui/Media';
import logoWhite from '../assets/images/logo.png'
// import logoDark from '../assets/images/logo_dark.png'


const LoginForm = ({ logoClassMain }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <Fragment>
      <div className='login-card'>
        <div>
          <div>
            <Link className={`logo ${logoClassMain ? logoClassMain : ''}`} to={process.env.PUBLIC_URL}>
              <Image attrImage={{ className: 'img-fluid for-light', src: logoWhite, alt: 'looginpage' }} />
              {/* <Image attrImage={{ className: 'img-fluid for-dark', src: logoDark, alt: 'looginpage' }} /> */}
            </Link>
          </div>

          <div className='login-main'>
            <Form className='theme-form login-form'>
              <H4>Sign in to account</H4>
              <P>Enter your email & password to login</P>
              <FormGroup>
                <Label className='col-form-label m-0'>Email Address</Label>
                <Input className='form-control' type='email' required placeholder='Test@gmail.com' />
              </FormGroup>
              <FormGroup className='position-relative'>
                <Label className='col-form-label m-0'>Password</Label>
                <div className='position-relative'>
                  <Input className='form-control' type={togglePassword ? 'text' : 'password'} name='login[password]' required placeholder='*********' />
                  <div className='show-hide' onClick={() => setTogglePassword(!togglePassword)}>
                    <span className={togglePassword ? '' : 'show'}></span>
                  </div>
                </div>
              </FormGroup>
              <FormGroup>
                <Btn attrBtn={{ className: 'd-block w-100 mt-2', color: 'primary', type: 'submit' }}>Sign in</Btn>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginForm;
