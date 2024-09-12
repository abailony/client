import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';
import connectMongo from '@/lib/mongodb';
import User from '@/models/User';

export async function GET(req) {
  const token = req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    await connectMongo();
    
    // Fetch the user from the database using their email or ID
    const user = await User.findOne({ email: decoded.email });
    
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Return user info including the adAccount stored in DB
    return NextResponse.json({
      name: user.name,
      email: user.email,
      role: user.role,
      adAccount: user.adAccount, // Return the adAccount here
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ message: "Error fetching user data" }, { status: 500 });
  }
}
