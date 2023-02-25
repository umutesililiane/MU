
import Paper from '@mui/material/Paper';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
//import { AccessTime } from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontsize: 11,
                    },
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontsize: 9,
                    }
                },
            ]
        }
    }
})

const TourCard = () => {
    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3}>
                    <img src="data:image/jpeg;base64,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"
                        alt=""
                        className='img' />
                    <Box paddingX={2}>
                        <Typography variant="subtitle1" component="h2">
                            Rwanda lakes
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}>

                            <Typography variant="body2" component="p">
                                5 hours
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",

                            }} marginTop={3}>

                            <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
                            <Typography variant="body2" component="p" marginLef={0.5}>
                                4.5
                            </Typography>
                            <Typography variant="body3" component="p" marginLeft={1.5}>
                                (600 views)
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" component="h3" marginTop={0}>
                                from C $7373
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>

    )
}

export default TourCard;