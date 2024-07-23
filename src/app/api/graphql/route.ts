import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import connectDB from "@/utils/db";
import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolver/index";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

connectDB();
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
