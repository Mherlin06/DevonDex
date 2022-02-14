import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';

import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LocationOn from '@mui/icons-material/LocationOn';
import { grey } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Edit from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Switch from '@mui/material/Switch';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        
        {/* URL が internal なので、next/link がレンダリングされる */} 
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <br />
        <Link href="/signup" color="secondary">
          Go to the Signup page
        </Link>
        <br />
        <Link href="/signin" color="secondary">
          Go to the Signin page
        </Link>
        <br />
        {/* URL が external なので、@mui/material/Link がレンダリングされる */} 
        <Link href="https://www.google.com/" color="secondary">
          Go to the Google Search
        </Link>
        <ProTip />
        <Copyright />
        
        <div  sx={{ m: 2 }} >
          <Button sx={{ m: 2 }} variant="contained">Hello World</Button>
          <br />
          <Button sx={{ m: 2 }}  variant="text" startIcon={<ShoppingCartRounded />}>
            Add to Cart
          </Button>
          <br />
          <Button sx={{ m: 2 }} variant="contained" startIcon={<ShoppingCartRounded />}>
            Add to Cart
          </Button>
          <br />
          <Button sx={{ m: 2 }} variant="outlined" startIcon={<ShoppingCartRounded />}>
            Add to Cart
          </Button>
        </div>

        <Card>
          <Box sx={{ p: 2, display: 'flex' }}>
            <Avatar variant="rounded" src="avatar1.jpg" />
            <Stack spacing={0.5}>
            <Typography fontWeight={700}>Michael Scott</Typography>
            <Typography variant="body2" color="text.secondary">
              <LocationOn sx={{color: grey[500]}} /> Scranton, PA
            </Typography>
            </Stack>
            <IconButton>
              <Edit sx={{ fontSize: 14 }} />
            </IconButton>
          </Box>

          <Divider />
          
          <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
          >
            <Chip>Active account</Chip>
            <Switch />
          </Stack>
        </Card>

      </Box>
    </Container>
  );
}
