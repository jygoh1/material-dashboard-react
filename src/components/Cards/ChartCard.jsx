import React from 'react';
import {
    withStyles, Card, CardContent, CardHeader, CardActions, Grid, Typography
} from 'material-ui';
import {
    ArrowUpward, AccessTime
} from 'material-ui-icons';
import PropTypes from 'prop-types';
import ChartistGraph from 'react-chartist';

import { dailySalesChart } from 'variables/charts';

const styles = {
    card: {
        display: 'inline-block',
        position: 'relative',
        width: '100%',
        margin: '25px 0',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
        borderRadius: '3px',
        color: 'rgba(0, 0, 0, 0.87)',
        background: '#fff',
    },
    cardHeader: {
        padding: '0',
        minHeight: '160px',
        margin: '-20px 15px 0',
        borderRadius: '3px',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
    },
    cardHeaderOrange: {
        background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
        boxShadow: '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)',
    },
    cardHeaderGreen: {
        background: 'linear-gradient(60deg, #66bb6a, #43a047)',
        boxShadow: '0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)',
    },
    cardHeaderRed: {
        background: 'linear-gradient(60deg, #ef5350, #e53935)',
        boxShadow: '0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)',
    },
    cardHeaderBlue: {
        background: 'linear-gradient(60deg, #26c6da, #00acc1)',
        boxShadow: '0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)',
    },
    cardHeaderPurple: {
        background: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
        boxShadow: '0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)',
    },
    cardContent: {
        padding: '15px 20px',
    },
    cardTitle: {
        marginTop: '0',
        marginBottom: '5px',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
        fontSize: '1.175em',
    },
    cardCategory: {
        marginBottom: '0',
        color: '#999999',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
        fontSize: '0.9em',
    },
    successText: {
        color: '#4caf50',
    },
    upArrowCardCategory: {
        width: 14,
        height: 14,
    },
    cardActions: {
        margin: '0 20px 10px',
        paddingTop: '10px',
        borderTop: '1px solid #eeeeee',
        height: 'auto',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
    },
    cardStats: {
        lineHeight: '22px',
        color: '#999999',
        fontSize: '12px',
        display: 'inline-block',
    },
    cardStatsIcon: {
        color: '#999999',
        position: 'initial',
        top: '4px',
        width: '16px',
        height: '16px',
    },
    cardStatsIconWarning: {
        color: '#ff9800',
    },
    cardStatsIconPrimary: {
        color: '#9c27b0',
    },
    cardStatsIconDanger: {
        color: '#f44336',
    },
    cardStatsIconSuccess: {
        color: '#4caf50',
    },
    cardStatsIconInfo: {
        color: '#00bcd4',
    },
    cardStatsIconRose: {
        color: '#e91e63',
    },
    cardStatsIconGray: {
        color: '#999999',
    },
};

class StatsCard extends React.Component{
    constructor(props){
        super(props);
        switch (this.props.iconColor) {
            case 'orange':
                this.state = {
                    iconColor: " " + this.props.classes.cardHeaderOrange
                }
                break;
            case 'green':
                this.state = {
                    iconColor: " " + this.props.classes.cardHeaderGreen
                }
                break;
            case 'red':
                this.state = {
                    iconColor: " " + this.props.classes.cardHeaderRed
                }
                break;
            case 'blue':
                this.state = {
                    iconColor: " " + this.props.classes.cardHeaderBlue
                }
                break;
            default:
                this.state = {
                    iconColor: " " + this.props.classes.cardHeaderPurple
                }
            break;
        };
        switch (this.props.statIconColor) {
            case 'warning':
                this.state.statIconColor = " " + this.props.classes.cardStatsIconWarning
                break;
            case 'primary':
                this.state.statIconColor = " " + this.props.classes.cardStatsIconPrimary
                break;
            case 'danger':
                this.state.statIconColor = " " + this.props.classes.cardStatsIconDanger
                break;
            case 'success':
                this.state.statIconColor = " " + this.props.classes.cardStatsIconSuccess
                break;
            case 'info':
                this.state.statIconColor = " " + this.props.classes.cardStatsIconInfo
                break;
            case 'rose':
                this.state.statIconColor = " " + this.props.classes.cardStatsIconRose
                break;
            default:
                this.state.statIconColor = " " + this.props.classes.cardStatsIconGray
            break;
        }
    }
    render(){
        return (
            <Grid item md={4}>
                <Card className={this.props.classes.card}>
                    <CardHeader
                        classes={{
                            root: (this.props.classes.cardHeader + this.state.iconColor),
                            // avatar: this.props.classes.cardAvatar
                        }}
                        subheader={
                            <ChartistGraph
                                className="ct-chart"
                                data={dailySalesChart.data}
                                type="Line"
                                options={dailySalesChart.options}
                                listener={
                                    dailySalesChart.animation
                                }
                            />
                        }
                    />
                    <CardContent className={this.props.classes.cardContent}>
                        <Typography type="title" component="h4" className={this.props.classes.cardTitle}>
                            Daily Sales
                        </Typography>
                        <Typography type="category" component="p" className={this.props.classes.cardCategory}>
                            <span className={this.props.classes.successText}><ArrowUpward className={this.props.classes.upArrowCardCategory}/> 55%</span> increase in today sales.
                        </Typography>
                    </CardContent>
                    <CardActions className={this.props.classes.cardActions}>
                        <AccessTime className={this.props.classes.cardStatsIcon}/> <p className={this.props.classes.cardStats}>updated 4 minutes ago</p>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}

StatsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatsCard);
