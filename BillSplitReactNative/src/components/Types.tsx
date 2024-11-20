import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import { string } from 'yup';

type RootStackParamList = {
  GroupScreen: undefined;
  GroupDetailsScreen:{groupName:string, groupId:number};
  GroupStackScreen:undefined;
  AddGroupForm:undefined;
  AddExpenseForm:{memberList:[
    {
      email:string,
      firstname:string,
      lastname:string
    }
    
  ]};
};

type RootTabParamList ={
  Groups:NavigatorScreenParams<RootStackParamList>;
  Friends:undefined;
  Activity:undefined;
  Profile:undefined;
}



type Props = NativeStackScreenProps<RootStackParamList, 'GroupScreen'>;
type PropsGroupDetailsScreen = NativeStackScreenProps<RootStackParamList, 'GroupDetailsScreen'>;
type PropsGroupStackScreen = NativeStackScreenProps<RootStackParamList, 'GroupStackScreen'>;
type PropsAddGroupForm = NativeStackScreenProps<RootStackParamList, 'AddGroupForm'>;
export type PropsAddExpenseForm = NativeStackScreenProps<RootStackParamList,'AddExpenseForm'>;


type GroupsType = {
  user_group_name: string
  user_group_id: number
  created_by:string
  creation_date:string
}

type GroupDetailResponse = {
  expenses_list:Array<GroupDetailType>
  payments_list:Array<PaymentDetailType>
  members_list:Array<UserType>
}

export type FriendDetail={
  
  email: string,
  firstname: string,
  lastname: string
  
}

export type GetFriendsResponse = {
  friends_list:Array<FriendDetail>
}

type GroupDetailType = {
  description: "Guava Pani puri",
  amount: number,
  splitType: string,
  participantList: Array<string>,
  paidByList: Array<string>,
  usergroup_name: string,
  owes: Array<string>,
  groupId: number,
  expenseId: number,
  created_by: string,
  updated_by: string,
  creation_date: string,
  updated_on: string
}

type PaymentDetailType = {
  payer: string,
  recipient: string,
  amount: number,
  groupId: number,
  paymentId: number,
  created_by: string,
  updated_by: string,
  creation_date: string,
  updated_on: string
}

export type CreateGroupResponse = {
  "createdOn":Date,
  "createdBy":string,
  "updatedOn":Date,
  "updatedBy":string,
  "user_group_id":452,
  "user_group_name":string

}

export type UserType = {
  "email": string,
  "firstname": string,
  "lastname": string
}


export type CreateExpenseResponse = {
  "expenseId":number,
  "createdOn":Date,
  "createdBy":string,
  "updatedOn":Date,
  "updatedBy":string,
  "groupId":number,
  "usergroup_name":string,
  "description":string,
  "amount":number,
  "splitType":string,
  "participantList":Array<UserType>,
  "paidByList":Array<UserType>,
  "owes":Map<string,string>



}

export type {RootStackParamList,Props,PropsGroupDetailsScreen,PropsGroupStackScreen,PropsAddGroupForm,GroupsType,GroupDetailResponse,RootTabParamList};
// export default Props;