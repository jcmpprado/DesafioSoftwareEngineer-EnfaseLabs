const { gql, ApolloServer } = require("apollo-server");

let Question = [
    {
        id: Date.now().toString(),
        quest: "[TESTE 1] Qual o resultado da soma de 2 + 2?",
        a: "6",
        b: "4",
        c: "2",
        d: "8"
    },
    {
        id: Date.now().toString(),
        quest: "[TESTE 2] Quem descobriu o Brasil?",
        a: "Paulo Gustavo",
        b: "Pedro Bial",
        c: "Pedro Alvares Cabral",
        d: "Paulo Ricardo"
    }
]

const typeDefs = gql `
    type Question {
        id: String
        quest: String
        a: String
        b: String
        c: String
        d: String
    },

    input QuestionInput {
        quest: String
        a: String
        b: String
        c: String
        d: String
    },

    type Query {
        question(id: String): Question
        questions: [Question]
    },
    
    type Mutation {
        createQuestion(data: QuestionInput): Question!

        editQuestion( id: String!, data: QuestionInput): Question!

        deleteQuestion(id: String!): String
    }
`

const resolvers = {

    Query: {
        questions(){
            return Question;
        }
    },
    Mutation: {
        createQuestion(parent, {data}) {            
            const newQuestion = {
                ...data,
                id: Date.now().toString()
            };

            Question.push(newQuestion);

            return newQuestion;
        },

        editQuestion(parent,args, {id, data}) {
            for (let i in Question) {
                if (Question[i].id === args.id) {
                  Question[i] = args;
                  Question[i].editedAt = new Date().toLocaleString("pt-BR");
                }
            }
              return args.id;
        },

        deleteQuestion(parent, args, id){
            for (let i in Question) {
                if (Question[i].id === args.id) {
                  Question.splice(i, 1);
                }
              }
              return args.id;
        }

            // const question = question.find(q => q.id === id);
            // const indice = question.findIndex(q => q.id === id);

            // const newQuestion = {
            //     ...question,
            //     ...data
            // };

            // question.splice(indice, 1, newQuestion);

            // return newQuestion;
    }
}


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`server started at ${url}`));
