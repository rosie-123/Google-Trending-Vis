import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Tabs, Tab, Box, Card, CardContent, CardHeader, CardActionArea, CardMedia } from "@material-ui/core";
import { TabContext } from '@material-ui/lab';
import disney from '../images/disney.jpg';
import ipad from '../images/ipad.jpg';
import irma from '../images/irma.jpg';
import lamar from '../images/lamar.jpg';
import paul from '../images/paul.jpg';
import powerBall from '../images/powerBall.jpg';
import rebecca from '../images/rebecca.jpg';
import robin from '../images/robin.jpg';
import whitney from '../images/whitney.jpg';
import worldCup from '../images/worldCup.jpg';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={4}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 2,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 400
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    media: {
        height: 360,
        width: 540,
        align: "center",
    },

    card: {
        width: 540,
    },
}));

export default function DecadeTop() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    //   const [data, setData] = useState({});
    //   useEffect(() => {
    //     fetch("https://www.cbsnews.com/news/google-top-search-terms-of-the-past-decade-2019-year-in-search-trending-new-year/")
    //       .then((response) => response.json())
    //       .then((response) => {
    //         fetch(response.url)
    //           .then(response2 => response2.text())
    //           .then(response2 => {
    //             setData(response2)
    //       });
    //     });
    //   }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root} >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="2010" {...a11yProps(0)} />
                <Tab label="2011" {...a11yProps(1)} />
                <Tab label="2012" {...a11yProps(2)} />
                <Tab label="2013" {...a11yProps(3)} />
                <Tab label="2014" {...a11yProps(4)} />
                <Tab label="2015" {...a11yProps(5)} />
                <Tab label="2016" {...a11yProps(6)} />
                <Tab label="2017" {...a11yProps(7)} />
                <Tab label="2018" {...a11yProps(8)} />
                <Tab label="2019" {...a11yProps(9)} />
            </Tabs>

            <TabPanel value={value} index={0}>
                <Card className={classes.card}>
                    <CardHeader
                        title="2010: iPad"
                    />
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            component="img"
                            alt=""
                            height="140"
                            src={ipad}
                            // image={require("../images/disney.jpg")}
                            title="2010: iPad"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            People were falling in love with Apple and catching Bieber Fever in 2010. iPad and Justin Bieber were Google's fastest-rising search terms that year.
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography paragraph>
                            <p>The iPad, which was released by Apple in 2010, was <a href="https://archive.google.com/intl/en/press/zeitgeist2010/regions/us/" target="_blank" rel="nofollow noopener">Google's fasted rising search query</a>&nbsp;that year. Also new on the scene was Justin Bieber, who released his first studio album in 2010 and was the highest-trending person on Google's list.</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </TabPanel>
            <TabPanel value={value} index={1}>
                <Card className={classes.card}>
                    <CardHeader
                        title="2011: Rebecca Black "

                    />
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            component="img"
                            alt=""
                            height="140"
                            src={rebecca}
                            // image={require("../images/disney.jpg")}
                            title="2011: Rebecca Black "
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Singer Rebecca Black in 2011.
(GETTY)

                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography paragraph>
                            <p>In the early part of the decade,13-year-old&nbsp;<span class="link"><a href="https://www.cbsnews.com/news/rebecca-blacks-friday-taken-off-youtube-today/" target="_blank" data-invalid-url-rewritten-http="">Rebecca Black</a></span> became a music sensation in what was then a whole new way. The teen released a music video for her song <a href="https://www.youtube.com/watch?v=kfVsfOSbJY0" target="_blank" rel="nofollow noopener">"Friday" on YouTube</a> and it took the world by storm. The repetitive tune went viral and became an ear worm stuck in the heads of millions of people.</p>
                            </Typography>
                            <Typography paragraph>
                            <p>Now, the song has 138 million views on YouTube, so it's not wonder that at the peak of her popularity, Black became Google's <a href="https://www.cbsnews.com/pictures/most-searched-of-2011-google-zeitgeist-reveals-who/10/" target="_blank" data-absolute="true" data-invalid-url-rewritten-http="">fastest-rising search term in the U.S.</a></p>  
                            </Typography>
                            <Typography paragraph>
                            <p>Also in 2011, Americans were engrossed in the trial of <span class="link"><a href="https://www.cbsnews.com/news/casey-anthony-trial-update-after-not-guilty-murder-verdict-sentencing-for-lesser-charges-thursday/" target="_blank" data-invalid-url-rewritten-http="">Casey Anthony</a></span>, a Florida mother charged in the 2008 death of her 2-year-old daughter, Caylee. After deliberating for more than 10 hours, a jury found Anthony not guilty of first-degree murder, a verdict that <span class="link"><a href="https://www.cbsnews.com/news/casey-anthony-judgment-day/" target="_blank" data-invalid-url-rewritten-http="">shocked millions of people</a></span>. The whole drama made Anthony one of the most-searched people on Google that year.</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Card className={classes.card}>
                    <CardHeader
                        title="2012: Whitney Houston"/>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            component="img"
                            alt=""
                            src={whitney}
                            // image={require("../images/disney.jpg")}
                            title="Whitney Houston"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Whitney Houston performs on October 3, 2009, in Freiburg, southern Germany. 
(GETTY)
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography paragraph>
                            <p>Singer <a href="https://archive.google.com/zeitgeist/2012/#united-states/overall" target="_blank" rel="nofollow noopener">Whitney Houston</a> passed away at the age of 48 in 2012, and topped Google's list for searches that year. <span class="link"><a href="https://www.cbsnews.com/news/singer-whitney-houston-dies-at-48/" target="_blank" data-invalid-url-rewritten-http="">Houston ruled as pop music's queen</a></span>&nbsp;until her majestic voice and regal image were ravaged by drug use, erratic behavior and a tumultuous marriage to singer Bobby Brown.&nbsp;</p>
                            </Typography>
                            <Typography paragraph>
                            <p>The singer's <span class="link"><a href="https://www.cbsnews.com/news/whitney-houstons-autopsy-how-can-drowning-cocaine-and-heart-disease-all-be-blamed/" target="_blank" data-invalid-url-rewritten-http="">cause of death</a></span> was determined to be drowning along with "effects of atherosclerotic heart disease and cocaine use." She left behind one daughter,&nbsp;<span class="link"><a href="https://www.cbsnews.com/news/pat-houston-opens-up-for-first-time-about-bobbi-kristina-brown-s-death/" target="_blank" data-invalid-url-rewritten-http="">Bobbi Kristina Brown</a></span>, who died just a few years later in 2016.</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Card className={classes.card}>
                    <CardHeader
                        title="2013: Paul Walker"/>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            component="img"
                            alt=""
                            height="140"
                            src={paul}
                            // image={require("../images/disney.jpg")}
                            title="Paul Walker"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Paul Walker, who is known for his role in the "Fast and the Furious" film series, died in a car crash in 2013.
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography paragraph>
                            <p><span class="link"><a href="https://www.cbsnews.com/news/paul-walker-fast-and-furious-star-dead-in-fiery-car-crash/" target="_blank" data-invalid-url-rewritten-http="">Actor Paul Walker</a></span>, who was best known for his role as Brian O'Conner in the "Fast and Furious" films, was killed in a car crash north of Los Angeles in November 2013 at the age of 40. Walker's name <a href="https://www.forbes.com/sites/amadoudiallo/2013/12/17/google-lists-top-searches-for-2013/" target="_blank" rel="nofollow noopener">topped Google's list of search terms in the U.S.</a> that year, according to&nbsp;<a href="https://www.npr.org/sections/thetwo-way/2013/12/17/251948000/paul-walker-boston-bombing-among-top-2013-google-searches" target="_blank" rel="nofollow noopener">several news outlets</a>&nbsp;that reported on the list at the time.</p>
                            </Typography>
                            <Typography paragraph>
                            <p>The former anti-Apartheid leader and president of South Africa, Nelson Mandela, who also died in 2013, <a href="https://www.businessinsider.com/google-zeitgeist-2013-2013-12" target="_blank" rel="nofollow noopener">topped Google's global list</a>.</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Card className={classes.card}>
                    <CardHeader
                        title="2014: Robin Williams"
                    />
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            component="img"
                            alt=""
                            height="140"
                            src={robin}
                            // image={require("../images/disney.jpg")}
                            title="Robin Williams"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Robin Williams died at age 57 in August 2014. He was the top trending search in Google that year.
                                (GETTY)
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography paragraph>
                                <p>2014 saw <span class="link"><a href="https://www.cbsnews.com/news/actor-robin-williams-dead-at-63-apparent-suicide/" target="_blank" data-invalid-url-rewritten-http="">the loss of Robin Williams</a></span>, who died by suicide in August. The actor&nbsp;<a href="https://trends.google.com/trends/yis/2014/US/" target="_blank" rel="nofollow noopener">was the fastest rising search term</a>&nbsp;in the U.S. that year.</p>
                            </Typography>
                            <Typography paragraph>
                                <p>Williams first rose to fame&nbsp;<span class="link"><a href="https://www.cbsnews.com/news/how-robin-williams-forever-changed-the-world-of-stand-up-comedy/" target="_blank" data-invalid-url-rewritten-http="">from the stand-up comedy circuit</a></span>&nbsp;in the 1970s, with a manic improvisational style all his own. He went on to become an Academy Award winner and three-time Golden Globe winner.</p>
                            </Typography>
                            <Typography paragraph>
                                <p>This was also a World Cup year, and that term was second on Google's list, followed by <a href="https://cbsnews.com/ebola/" target="_blank" data-absolute="true" rel="nofollow noopener">Ebola</a>, as an outbreak of the deadly virus sickened thousands;&nbsp;<a href="http://cbsnews.com/malaysia-airlines-flight-370/" target="_blank" data-absolute="true" rel="nofollow noopener">Malaysia Airlines</a>, after Flight 370 mysteriously vanished somewhere over the Pacific; and the viral video game <span class="link"><a href="https://www.cbsnews.com/news/flappy-bird-creator-yanks-viral-mobile-game/" target="_blank" data-invalid-url-rewritten-http="">Flappy Bird</a></span>.</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Card className={classes.card}>
                    <CardHeader
                        title="2015: Lamar Odom"
                    />
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            component="img"
                            alt=""
                            height="140"
                            src={lamar}
                            // image={require("../images/disney.jpg")}
                            title="Lamar Odom"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lamar Odom was both the highest-trending search term and the most-searched person in 2015. Caitlyn Jenner was the second-most searched person.
                                (GETTY/VANITY FAIR)
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography paragraph>
                                <p>In 2015, <a href="https://trends.google.com/trends/yis/2015/US/" target="_blank" rel="nofollow noopener">the fastest-rising search term</a> was a person,&nbsp;<span class="link"><a href="https://www.cbsnews.com/news/lamar-odom-overdosed-on-cocaine-and-other-drugs-authorities-suspect/" target="_blank" data-invalid-url-rewritten-http="">Lamar Odom</a></span>. The NBA player joined a reality TV dynasty when he married Khloe Kardashian in 2009. By 2015, Odom and Kardashian were going through a divorce. That year, he was found unconscious&nbsp;<span class="link"><a href="https://www.cbsnews.com/news/brothel-owner-lamar-odom-wanted-confidentiality-policy/" target="_blank" data-invalid-url-rewritten-http="">in a Nevada brothel</a></span>, suffering an apparent drug overdose. Kardashian and her family were by Odom's side during his recovery and she dismissed the divorce filing until he recovered.</p>
                            </Typography>
                            <Typography paragraph>
                                <p>Another Kardashian-Jenner family member made headlines that year. Also on the list of top Google search terms was <span class="link"><a href="https://www.cbsnews.com/news/caitlyn-jenner-formerly-bruce-jenner-poses-for-cover-of-vanity-fair/" target="_blank" data-invalid-url-rewritten-http="">Caitlyn Jenner</a></span>, formerly Bruce Jenner, who introduced herself to the world as Caitlyn for the first time on the cover of&nbsp;<a href="http://www.vanityfair.com/hollywood/2015/06/caitlyn-jenner-bruce-cover-annie-leibovitz" target="_blank" rel="nofollow noopener">Vanity Fair</a>. Jenner had come out as transgender earlier that year and began to publicly transition from man to woman.</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </TabPanel>
            <TabPanel value={value} index={6}>
                <Card className={classes.card}>
                    <CardHeader
                        title="2016: Powerball"
                    />
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            component="img"
                            alt=""
                            height="140"
                            src={powerBall}
                            // image={require("../images/disney.jpg")}
                            title="Powerball"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                The more than $1 billion Powerball, Prince's death and the Summer Olympics in Rio were some of the stories that rocked the U.S. in 2016.
                                (GETTY)
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography paragraph>
                                <p>The year in search got a bit of a curveball in 2016 — actually, it was a <em>Powerball</em>. The term skyrocketed in U.S. Google searches that year after <span class="link"><a href="https://www.cbsnews.com/news/powerball-winning-numbers-drawing-jackpot-over-one-billion-dollars/" target="_blank" data-invalid-url-rewritten-http="">the jackpot topped $1 billion</a></span>.</p>
                            </Typography>
                            <Typography paragraph>
                                <p>Prince was <a href="https://trends.google.com/trends/yis/2016/US/" target="_blank" rel="nofollow noopener">the second highest trending search term</a> of 2016, after the singer&nbsp;<span class="link"><a href="https://www.cbsnews.com/news/prince-dead-at-57/" target="_blank" data-invalid-url-rewritten-http="">died suddenly at the age of 57</a></span> inside his Minnesota compound, Paisley Park.</p>
                            </Typography>
                            <Typography paragraph>
                                <p>2016 was also an Olympic year, and the Summer Games in Rio were the top news event searched in the U.S.</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </TabPanel>
            <TabPanel value={value} index={7}>
                <Card className={classes.card}>
                    <CardHeader
                        title="2017: Hurricane Irma"

                    />
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            component="img"
                            alt=""
                            height="140"
                            src={irma}
                            // image={require("../images/disney.jpg")}
                            title="Hurricane Irma"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                GOES weather satellites provide the hemispheric views familiar from nightly newscasts and also dramatic close-up looks at storms like Hurricane Irma, seen here, as it approached Puerto Rico in 2017.
                                (NOAA)
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography paragraph>
                                <p>Several islands in the Caribbean were reduced to rubble when&nbsp;<a href="https://trends.google.com/trends/yis/2017/US/" target="_blank" rel="nofollow noopener">Hurricane Irma</a>&nbsp;tore through the region in September 2017. <span class="link"><a href="https://www.cbsnews.com/news/huricane-irma-death-toll-florida-power-outage/" target="_blank" data-invalid-url-rewritten-http="">The powerful storm</a></span> also caused widespread damage across Florida.</p>
                            </Typography>
                            <Typography paragraph>
                                <p>That year saw several unusually destructive hurricanes, including <a href="http://cbsnews.com/harvey" target="_blank" rel="nofollow noopener">Hurricane Harvey</a>, which hit Houston, and <span class="link"><a href="https://www.cbsnews.com/news/hurricane-maria-death-toll-puerto-rico-2975-killed-by-storm-study-finds/" target="_blank" data-invalid-url-rewritten-http="">Hurricane Maria</a></span>, which devastated Puerto Rico.</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </TabPanel>
            <TabPanel value={value} index={8}>
                <Card className={classes.card}>
                    <CardHeader
                        title="2018: World Cup"

                    />
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            component="img"
                            alt=""
                            height="140"
                            src={worldCup}
                            // image={require("../images/disney.jpg")}
                            title="World Cup"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Kylian Mbappe of France celebrates with teammates after scoring his team's fourth goal during the 2018 FIFA World Cup Final between France and Croatia at Luzhniki Stadium on July 15, 2018, in Moscow, Russia.
                                (CATHERINE IVILL / GETTY)
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography paragraph>
                                <p>With soccer being one of the most popular sports in the world, it's no wonder "World Cup" is often on Google's most-searched list during tournament years. Last year, <span class="link"><a href="https://www.cbsnews.com/news/2018-world-cup-final-france-defeats-croatia-4-2-to-capture-title-today-2018-07-15/" target="_blank" data-invalid-url-rewritten-http="">France defeated Croatia 4-2</a></span> in the World Cup final.</p>
                            </Typography>
                            <Typography paragraph>
                                <p>The World Cup was also <a href="https://trends.google.com/trends/yis/2018/US/" target="_blank" rel="nofollow noopener">Google's top news event</a> in the U.S. last year, followed by Hurricane Florence.</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </TabPanel>
            <TabPanel value={value} index={9}>
                <Card className={classes.card}>
                    <CardHeader
                        title="2019: Disney+"
                    />
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            component="img"
                            alt="Disney+"
                            height="140"
                            src={disney}
                            // image={require("../images/disney.jpg")}
                            title="Disney+"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Disney+ was the fastest rising search term in the U.S. this year, according to Google. "Baby Yoda," who took the world by storm after appearing in the original Disney+ series "The Mandalorian," was the most-searched baby.
                                (DISNEY/GETTY)
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography paragraph>
                                As the streaming wars raged on this year, <a href="https://trends.google.com/trends/yis/2019/US/" target="_blank" rel="nofollow noopener">Google users</a> were most curious about <span class="link"><a href="https://www.cbsnews.com/news/disney-streaming-service-cost-disney-plus-service-start-date-of-november-12-2019/" target="_blank" data-invalid-url-rewritten-http="">newcomer Disney+</a></span>. After months of speculation, <span class="link"><a href="https://www.cbsnews.com/news/disney-plus-app-heres-what-you-need-to-know-about-the-disney-launch-today-shows-movies-marvel-verizon-deal/" target="_blank" data-invalid-url-rewritten-http="">Disney+ finally launched</a></span>&nbsp;in November, giving subscribers access to old Disney Channel shows, classic animated movies, newly-acquired properties like Marvel and Star Wars, original content and more.
                            </Typography>
                            <Typography paragraph>
                                <p>The highest-rising news event search in the U.S. in 2019 was <span class="link"><a href="https://www.cbsnews.com/live-news/hurricane-dorian-update-category-4-storm-landfall-latest-track-path-models-forecast-2019-09-01/" target="_blank" data-invalid-url-rewritten-http="">Hurricane Dorian</a></span>, which battered the Bahamas as a Category 5 in September. The most-searched person was <span class="link"><a href="https://www.cbsnews.com/news/antonio-brown-released-by-new-england-patriots-following-rape-allegation-2019-09-20/" target="_blank" data-invalid-url-rewritten-http="">Antonio Brown</a></span>, the most-searched actor was <span class="link"><a href="https://www.cbsnews.com/live-news/jussie-smollett-charges-dropped-empire-actor-emergency-chicago-court-appearance-today-2019-03-26/" target="_blank" data-invalid-url-rewritten-http="">Jussie Smollett</a></span> and the most-searched baby was, of course, <span class="link"><a href="https://www.cbsnews.com/news/baby-yoda-mandalorian-official-toys-from-hasbro-now-available-but-wont-ship-until-may-2019-12-13/" target="_blank" data-invalid-url-rewritten-http="">Baby Yoda</a></span>.</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </TabPanel>

        </div>
    );
}

