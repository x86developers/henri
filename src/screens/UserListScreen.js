import React from 'react'
import { View, Text } from 'react-native'

const UserList = () => {

  console.log('User List Screen');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>User List Screen</Text>
    </View>
  )
}

export default UserList

{/* 

Redux Code - Incomplete ....

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import fetchUsersAction from '../actions/FetchUsers'
import { getUsersError, getUsers, getUsersPending } from '../reducers/UsersReducer'

import LoadingSpinner from '../../assets/Rolling-1s-200px.gif'


class UserView extends Component {
  constructor(props) {

      super(props);
      this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
      const {fetchUsers} = this.props;
      fetchUsers();
  }

  shouldComponentRender() {
      const {pending} = this.props;
      if(this.pending === false) return false;
      // more tests
      return true;
  }

  render() {
      const {users, error, pending} = this.props;

      if(!this.shouldComponentRender()) return <LoadingSpinner />

      return (
          <View>
              {error && <Text>{error}</Text>}
              {users}
              </View>
              )
          }
        }
        
        
        const mapStateToProps = state => ({
          error: getUsersError(state),
          users: getUsers(state),
          pending: getUsersPending(state)
        })
        
        const mapDispatchToProps = dispatch => bindActionCreators({
          fetchUsers: fetchUsersAction
        }, dispatch)
        
        export default connect(
          mapStateToProps,
          mapDispatchToProps
        )(UserView );

*/}
