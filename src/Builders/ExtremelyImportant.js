import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import { fetchUsers } from '../redux.FakeData'
import { fetchUsers } from "../ALLStatesGoHere/AllStates/FakeStuff/userActions";

//AND I MADE IT WORK ^_^

function UsersContainer({FakeDataCC, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, [])
  return FakeDataCC.loading ? (<h2>Loading</h2>) :
         FakeDataCC.error ? (<h2>{FakeDataCC.error}</h2>) :
         (<div>
          <h2>Users List</h2>
            <div>
              {FakeDataCC &&
                FakeDataCC.users &&
                FakeDataCC.users.map(user => <p key={user.id}>{user.name}</p>)}
            </div>
          </div>
         )
}

const mapStateToProps = state => {
  return {
    FakeDataCC: state.FakeDataCC
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)