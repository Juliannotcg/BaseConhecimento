import React, {useEffect, useState} from 'react';
import {Button, Tab, Tabs, TextField, InputAdornment, Icon, Typography} from '@material-ui/core';
import {orange} from '@material-ui/core/colors';
import {makeStyles} from '@material-ui/styles';
import {FuseAnimate, FusePageCarded, FuseChipSelect} from '@fuse';
import {useForm} from '@fuse/hooks';
import {Link} from 'react-router-dom';
import _ from '@lodash';
import {useDispatch, useSelector} from 'react-redux';
import withReducer from 'app/store/withReducer';
import * as Actions from '../orgao/store/actions';
import reducer from '../orgao/store/reducers';

const useStyles = makeStyles(theme => ({
    productImageFeaturedStar: {
        position: 'absolute',
        top     : 0,
        right   : 0,
        color   : orange[400],
        opacity : 0
    }
}));

function Orgao(props)
{
    const dispatch = useDispatch();
    const orgao = useSelector(({orgaoApp}) => orgaoApp.orgao);

    const classes = useStyles(props);
    const [tabValue, setTabValue] = useState(0);
    const {form, handleChange, setForm} = useForm(null);

    useEffect(() => {
        function updateOrgaoState()
        {
            const params = props.match.params;
            const {Id} = params;

            if ( Id === 'new' )
            {
                dispatch(Actions.newOrgao());
            }
            else
            {
                dispatch(Actions.getOrgao(props.match.params));
            }
        }

        updateOrgaoState();
    }, [dispatch, props.match.params]);

    useEffect(() => {
        if (
            (orgao.data && !form) ||
            (orgao.data && form && orgao.data.id !== form.id)
        )
        {
            setForm(orgao.data);
        }
    }, [form, orgao.data, setForm]);

    // function handleChangeTab(event, tabValue)
    // {
    //     setTabValue(tabValue);
    // }

    function handleChipChange(value, nome)
    {
        setForm(_.set({...form}, nome, value.map(item => item.value)));
    }

    function canBeSubmitted()
    {
        console.log(form);
        // return (
        //     form.name.length > 0 &&
        //     !_.isEqual(orgao.data, form)
        // );
    }

    return (
        <FusePageCarded
            classes={{
                toolbar: "p-0",
                header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
            header={
                form && (
                    <div className="flex flex-1 w-full items-center justify-between">

                        <div className="flex flex-col items-start max-w-full">

                            <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                <Typography className="normal-case flex items-center sm:mb-12" component={Link} role="button" to="/Orgaos" color="inherit">
                                    <Icon className="mr-4 text-20">arrow_back</Icon>
                                    Orgaos
                                </Typography>
                            </FuseAnimate>

                            <div className="flex items-center max-w-full">
                                <FuseAnimate animation="transition.expandIn" delay={300}>
                                    {
                                       <span>{"Julianno"}</span>
                                    }
                                </FuseAnimate>
                                <div className="flex flex-col min-w-0">
                                    <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                        <Typography className="text-16 sm:text-20 truncate">
                                            {'Novo Orgao'}
                                        </Typography>
                                    </FuseAnimate>
                                    <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                        <Typography variant="caption">Orgao Detail</Typography>
                                    </FuseAnimate>
                                </div>
                            </div>
                        </div>
                        <FuseAnimate animation="transition.slideRightIn" delay={300}>
                            <Button
                                className="whitespace-no-wrap"
                                variant="contained"
                                disabled={!canBeSubmitted()}
                                onClick={() => dispatch(Actions.saveOrgao(form))}
                            >
                                Save
                            </Button>
                        </FuseAnimate>
                    </div>
                )
            }
            contentToolbar={
                <Tabs
                    //value={tabValue}
                    //onChange={handleChangeTab}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="scrollable"
                    scrollButtons="auto"
                    classes={{root: "w-full h-64"}}
                >
                    <Tab className="h-64 normal-case" label="Basic Info"/>
                    <Tab className="h-64 normal-case" label="Product Images"/>
                    <Tab className="h-64 normal-case" label="Pricing"/>
                    <Tab className="h-64 normal-case" label="Inventory"/>
                    <Tab className="h-64 normal-case" label="Shipping"/>
                </Tabs>
            }
            content={
                form && (
                    <div className="p-16 sm:p-24 max-w-2xl">
                            <div>
                                <TextField
                                    className="mt-8 mb-16"
                                    error={form.name === ''}
                                    required
                                    label="Name"
                                    autoFocus
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                />

                                <TextField
                                    className="mt-8 mb-16"
                                    id="descricao"
                                    name="descricao"
                                    onChange={handleChange}
                                    label="Description"
                                    type="text"
                                    value={form.descricao}
                                    multiline
                                    rows={5}
                                    variant="outlined"
                                    fullWidth
                                />

                                {/* <FuseChipSelect
                                    className="mt-8 mb-24"
                                    value={
                                        form.categories.map(item => ({
                                            value: item,
                                            label: item
                                        }))
                                    }
                                    onChange={(value) => handleChipChange(value, 'categories')}
                                    placeholder="Select multiple categories"
                                    textFieldProps={{
                                        label          : 'Categories',
                                        InputLabelProps: {
                                            shrink: true
                                        },
                                        variant        : 'outlined'
                                    }}
                                    isMulti
                                /> */}
                            </div>
                        )}
                    </div>
                )
            }
            innerScroll
        />
    )
}

export default withReducer('orgaoApp', reducer)(Orgao);
