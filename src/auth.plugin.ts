import { Plugin } from '@nestjs/graphql';
import { ApolloServerPlugin, GraphQLRequestListener, GraphQLRequestContext } from 'apollo-server-plugin-base';

export type AuthContext = {
  dealershipId?: string | null;
};

@Plugin()
export class AuthPlugin implements ApolloServerPlugin {
  async requestDidStart(context: GraphQLRequestContext<AuthContext>): Promise<GraphQLRequestListener> {
    context.context.dealershipId = context.request.http?.headers.get('dealership-id');
    return {};
  }
}
