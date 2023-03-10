const HttpError = require("../middlewares/HttpError");
const Feedback = require("../models/feedbackModel");

//feedback user post service
const postUserFeedbackServices = async(detail)=>
{
    const {feedback,_id,Username,email} = detail;
    try{
        // console.log("feedback",feedback);
        const feed = new Feedback(feedback);
        await feed.save();
        console.log("feed in s",feed);

        if(!feed)
        {
            const error = new HttpError(
                404,"Something went wring in feedback Services"
            );
            return {error};
        // console.log("error",error);

        }
        return {feed};
    }
    catch(e)
    {
        const error = new HttpError(500, `Internal server error : ${e}`);
        return { error };   
    }
};

//get all user feedback services
const getAllUserFeedbackServices = async()=>{
    try{
        const allFeedback = await Feedback.find().populate("user");
        if(allFeedback)
        {
            return {allFeedback};
        }
        else
        {
            const error = new HttpError(404, "Sorry No Feedback yet");
            console.log("error: ", error);
            return { error };
        }
    }
    catch(err)
    {
        const error = new HttpError(
            404,
            "something went wrong in All User feeback Services!"
          );
        return {error};
    }
};

//delete user Feedback Service
const deleteuserFeedbackService = async(_id)=>{
    try{
        const deleteFeedback = await Feedback.findByIdAndDelete({_id});
        if(!deleteFeedback)
        {
            const error = new HttpError(404, "Feedback not Found!");
            console.log("error: ", error);
            return { error };
        }
        return { deleteFeedback };
    }
    catch(err){
        const error = new HttpError(404, "Sorry can't delete Your Feedback");
        console.log("error: ", error);
        return { error };
    }
};

//feedback Client post service
const postClientFeedbackServices = async(detail)=>
{
    const {feedback,_id,Clientname,email} = detail;
    try{
        // console.log("feedback",feedback);
        const feed = new Feedback(feedback);
        await feed.save();
        console.log("feed in s",feed);

        if(!feed)
        {
            const error = new HttpError(
                404,"Something went wring in feedback Services"
            );
            return {error};
        // console.log("error",error);

        }
        return {feed};
    }
    catch(e)
    {
        const error = new HttpError(500, `Internal server error : ${e}`);
        return { error };   
    }
};

//get all feedback Client services
const getAllClientFeedbackServices = async()=>{
    try{
        const allFeedback = await Feedback.find().populate("user");
        if(allFeedback)
        {
            return {allFeedback};
        }
        else
        {
            const error = new HttpError(404, "Sorry No Feedback yet");
            console.log("error: ", error);
            return { error };
        }
    }
    catch(err)
    {
        const error = new HttpError(
            404,
            "something went wrong in All User feeback Services!"
          );
        return {error};
    }
};


//delete Client Feedback Service
const deleteClientFeedbackService = async(_id)=>{
    try{
        const deleteFeedback = await Feedback.findByIdAndDelete({_id});
        if(!deleteFeedback)
        {
            const error = new HttpError(404, "Feedback not Found!");
            console.log("error: ", error);
            return { error };
        }
        return { deleteFeedback };
    }
    catch(err){
        const error = new HttpError(404, "Sorry can't delete Your Feedback");
        console.log("error: ", error);
        return { error };
    }
};

module.exports={postUserFeedbackServices,
    getAllUserFeedbackServices,
    deleteuserFeedbackService,
    postClientFeedbackServices,
    getAllClientFeedbackServices,
    deleteClientFeedbackService};
