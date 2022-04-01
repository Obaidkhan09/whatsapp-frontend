import { useState } from 'react';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import Button from '@mui/material/Button'


import "../styles/auth.css"

export default function Auth() {

    const [inn, setIn] = useState(true);
    const [widthSize, setWidthSize] = useState('40%');
    const [heightSize, setHeightSize] = useState("360px")
    const [innBorder, setInnBorder] = useState('1px solid #25D366');
    const [uppBorder, setUppBorder] = useState('none');
    const [innBgClr, setInnBgClr] = useState('#25D366');
    const [uppBgClr, setUppBgClr] = useState('white');
    const [innFntClr, setInnFntClr] = useState('white');
    const [uppFntClr, setUppFntClr] = useState('#25D366');

    const handleSignIn = () => {
        setHeightSize("360px");
        setIn(true);
        setInnBorder('1px solid #25D366');
        setUppBorder('none');
        setInnBgClr('#25D366');
        setUppBgClr('white');
        setInnFntClr('white');
        setUppFntClr('#25D366');
    }

    const handleSignUp = () => {
        setHeightSize("450px");
        setIn(false);
        setUppBorder('1px solid #25D366');
        setInnBorder('none');
        setInnBgClr('white');
        setUppBgClr('#25D366');
        setInnFntClr('#25D366');
        setUppFntClr('white');

    }
    return (
        <div
        className='auth-body'
        style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div className='home'
                style={{
                    width: `${widthSize}`,
                    height: `${heightSize}`,
                }}
            >
                <h3>Welcome to WhatsApp Clone</h3>
                <div className="btn-grp"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        marginTop : "20px",
                    }}
                >
                    <div>
                        <Button style={{
                            color: `${innFntClr}`,
                            backgroundColor: `${innBgClr}`,
                            fontWeight: 600,
                            border: `${innBorder}`
                        }}
                            onClick={handleSignIn}
                        >
                            Sign In
                        </Button>
                    </div>
                    <div>
                        <Button
                            style={{
                                color: `${uppFntClr}`,
                                backgroundColor: `${uppBgClr}`,
                                fontWeight: 600,
                                border: `${uppBorder}`
                            }}
                            onClick={ handleSignUp }
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
                {inn ?
                    <SignIn /> :
                    <SignUp />
                }
            </div>
        </div>
    )
}
