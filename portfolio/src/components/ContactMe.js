import React from 'react'
import { Stack, TextField, Box, Button } from '@mui/material'
import { useState } from 'react'
import ExpandingTextArea from './ExpandingTextArea';


export const ContactMe = () => {

    const [emailInput, setEmailInput] = useState('');
  return (
    <>
        <section className="contact-me" id='connect'>
            <h2>Contact Me</h2>
                <div className="formSection">
                <Stack spacing={2} direction={'column'}>
                    <Stack direction='row' spacing={2}>
                        <TextField label='First Name' variant='filled'/>
                        <TextField label='Last Name' variant='filled'/>
                    </Stack>
                    <Stack direction='row' spacing={2}>
                        <Box flex={1}>
                            <TextField id='email' label='Email' variant='filled' required
                                value={emailInput}
                                onChange={e =>setEmailInput(e.target.value)}
                                error={!emailInput}
                                helperText='Valid email is required'
                                style={{ flex: 1 }}
                                sx={{ display: 'flex' }}
                            />
                        </Box>
                    </Stack>
                    <Stack>
                        <ExpandingTextArea></ExpandingTextArea>
                    </Stack>
                    <Stack>
                        <Button variant='outlined'>
                            Send Message
                        </Button>
                    </Stack>
                </Stack>
                </div>
        </section>
    </>
  )
}
