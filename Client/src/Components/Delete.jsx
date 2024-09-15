import React from 'react'

export default function Delete() {
  return (
    <div className="parent">
      <div className="container1">
        <div className="menu">Delete User</div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="form-label">Enter Your Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Enter Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}         
            />
          </div>
          <div>
            <label htmlFor="password" className="form-label">Enter Your Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Enter Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="btn btn-primary">DELETE</button>
        </form>
      </div>
    </div>
  )
}
