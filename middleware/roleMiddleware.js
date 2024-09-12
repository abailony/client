import { getSession } from 'next-auth/react';

export function withRole(handler, allowedRoles) {
  return async (req, res) => {
    const session = await getSession({ req });
    
    if (!session) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    
    const userRole = session.user.role;
    
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    
    return handler(req, res);
  };
}

// Usage example:
// export default withRole(async function handler(req, res) {
//   // Your route logic here
// }, ['admin', 'moderator']);